import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@repo/db";
import { signupSchema } from "@repo/common/src/index";
import { withAccelerate } from "@repo/db";

export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRoute.post("/signup", async (c) => {
  const body = await c.req.json();

  const { success } = signupSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ message: "wrong inputs" });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET,
    );
    return c.text(jwt);
  } catch (error) {
    c.status(411);
    return c.text("User already exist with this email");
  }
});

userRoute.post("/signin", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.text("User does not exist");
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET,
    );
    return c.text(jwt);
  } catch (error) {
    c.status(411);
    return c.text("Invalid");
  }
});
