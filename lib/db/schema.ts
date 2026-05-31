import { pgTable, text, timestamp, boolean, serial, integer, decimal, jsonb } from "drizzle-orm/pg-core"

// Better Auth tables
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  role: text("role").notNull().default("student"),
  phone: text("phone"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
})

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

// App tables
export const course = pgTable("course", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  thumbnail: text("thumbnail"),
  price: integer("price").notNull().default(0),
  category: text("category").notNull(),
  level: text("level").notNull().default("beginner"),
  duration: text("duration"),
  totalLessons: integer("totalLessons").default(0),
  totalStudents: integer("totalStudents").default(0),
  rating: decimal("rating", { precision: 2, scale: 1 }).default("0"),
  isPublished: boolean("isPublished").default(false),
  teacherId: text("teacherId").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const chapter = pgTable("chapter", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  position: integer("position").notNull().default(0),
  courseId: integer("courseId").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const lesson = pgTable("lesson", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  videoUrl: text("videoUrl"),
  duration: integer("duration"),
  position: integer("position").notNull().default(0),
  isPreview: boolean("isPreview").default(false),
  chapterId: integer("chapterId").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const enrollment = pgTable("enrollment", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  courseId: integer("courseId").notNull(),
  progress: integer("progress").default(0),
  completedLessons: text("completedLessons").array().default([]),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  courseId: integer("courseId"),
  duration: integer("duration").notNull().default(60),
  totalMarks: integer("totalMarks").notNull().default(100),
  passingMarks: integer("passingMarks").notNull().default(40),
  negativeMarking: decimal("negativeMarking", { precision: 2, scale: 1 }).default("0"),
  isPublished: boolean("isPublished").default(false),
  teacherId: text("teacherId").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const question = pgTable("question", {
  id: serial("id").primaryKey(),
  testId: integer("testId").notNull(),
  question: text("question").notNull(),
  optionA: text("optionA").notNull(),
  optionB: text("optionB").notNull(),
  optionC: text("optionC").notNull(),
  optionD: text("optionD").notNull(),
  correctAnswer: text("correctAnswer").notNull(),
  explanation: text("explanation"),
  marks: integer("marks").default(4),
  position: integer("position").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const testAttempt = pgTable("test_attempt", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  testId: integer("testId").notNull(),
  score: integer("score").default(0),
  totalQuestions: integer("totalQuestions").default(0),
  correctAnswers: integer("correctAnswers").default(0),
  wrongAnswers: integer("wrongAnswers").default(0),
  unanswered: integer("unanswered").default(0),
  timeTaken: integer("timeTaken").default(0),
  answers: jsonb("answers").default({}),
  status: text("status").default("in-progress"),
  startedAt: timestamp("startedAt").notNull().defaultNow(),
  completedAt: timestamp("completedAt"),
})

export const doubt = pgTable("doubt", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  courseId: integer("courseId"),
  lessonId: integer("lessonId"),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").default("open"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const doubtReply = pgTable("doubt_reply", {
  id: serial("id").primaryKey(),
  doubtId: integer("doubtId").notNull(),
  userId: text("userId").notNull(),
  content: text("content").notNull(),
  isTeacherReply: boolean("isTeacherReply").default(false),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const material = pgTable("material", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  fileUrl: text("fileUrl").notNull(),
  fileType: text("fileType").notNull(),
  courseId: integer("courseId"),
  chapterId: integer("chapterId"),
  teacherId: text("teacherId").notNull(),
  downloads: integer("downloads").default(0),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const notification = pgTable("notification", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  type: text("type").default("info"),
  isRead: boolean("isRead").default(false),
  link: text("link"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const testimonial = pgTable("testimonial", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  examName: text("examName"),
  rank: text("rank"),
  isApproved: boolean("isApproved").default(false),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

export const announcement = pgTable("announcement", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").default("general"),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  expiresAt: timestamp("expiresAt"),
})

export const certificate = pgTable("certificate", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  courseId: integer("courseId").notNull(),
  certificateNumber: text("certificateNumber").notNull().unique(),
  issuedAt: timestamp("issuedAt").notNull().defaultNow(),
})
