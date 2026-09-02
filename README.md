# Lecture12 : React 1 — Basic TSX · Component · Props

## เริ่มต้น

```bash
pnpm install
pnpm run dev
```

## แผนผังไฟล์

```
src/
  main.tsx                 → render <TodolistPage />
  pages/
    TodolistPage.tsx
  components/
    Header.tsx  TaskInput.tsx  Footer.tsx  TaskCard.tsx
    Sidebar.tsx  Modal.tsx
  libs/
    Footer.ts  Todolist.ts   ← ที่เก็บ interface ของ Props
    Sidebar.ts               ← ตัวอย่าง interface ที่ทำเสร็จแล้ว
```

## ขั้นที่ 1 — ตัวแปร + `{ }`

- **[ขั้นที่ 1.1]** ประกาศตัวแปรเหนือ `return`

```tsx
// 📋 src/pages/TodolistPage.tsx
const title = "Todo List";
const tasks = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: true,
  },
];
```

- **[ขั้นที่ 1.2]** เอามาแสดงด้วย `{ }`

```tsx
<h2 className="text-center">{title}</h2>
<p className="text-center text-muted">เฉพาะ ID {tasks[0]} งาน</p>
<p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>
```

## ขั้นที่ 2 — แยก Component แบบ **ไม่มี Props**: `Header` และ `TaskInput`

- **[ขั้นที่ 2A]** - Header

```tsx
// 📋 src/components/Header.tsx
export default function Header() {
  return (
    <header className="text-white bg-secondary p-2 w-100">
      <p className="m-4">lecture12-2569</p>
    </header>
  );
}
```

- **[ขั้นที่ 2B]** - TaskInput (กรอกข้อมูล + ปุ่ม Add)

```tsx
// 📋 src/components/TaskInput.tsx
export default function TaskInput() {
  return (
    <div className="d-flex my-3">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Insert a task here.."
      />
      <button className="btn btn-primary px-4">Add</button>
    </div>
  );
}
```

---

## ขั้นที่ 3 — แยก Component + **ส่ง Props** + `interface`: `Footer`

`Footer` มีค่าที่ควรเปลี่ยนได้จากภายนอก = ปี / ชื่อ / รหัสนักศึกษา → ทำเป็น Props

**[ขั้นที่ 3.1]** - interface

```ts
// 📋 src/libs/Footer.ts
interface FooterProps {
  year: string;
  fullName: string;
  studentId: string | number; // union type: string หรือ number ก็ได้
}

export type { FooterProps };
```

**[ขั้นที่ 3.2]** Component ที่รับ Props:

```tsx
// 📋 src/components/Footer.tsx
import { type FooterProps } from "../libs/Footer";

export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">
        Copyright © {year} {fullName} {studentId}
      </p>
    </footer>
  );
}
```

---

## ขั้นที่ 4 — Props เป็น object + `.map()`: `TaskCard`

**[ขั้นที่ 4.1]** interface

```ts
// 📋 src/libs/Todolist.ts
interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export type { TaskCardProps };
```

**[ขั้นที่ 4.2]** ใส่ type ให้ตัวแปร `tasks`

```tsx
const tasks: TaskCardProps[] = [
  /* ...ToDolist... */
];
```

**[ขั้นที่ 4.3]** Component การ์ด 1 ใบ (รับ props + `className` แบบมีเงื่อนไข):

```tsx
// 📋 src/components/TaskCard.tsx
import { type TaskCardProps } from "../libs/Todolist";

export default function TaskCard({
  title,
  description,
  isDone,
}: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h5
              className={
                isDone
                  ? "card-title m-0 text-decoration-line-through"
                  : "card-title m-0"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-lg-4">
            <p className="card-text m-0 text-muted">{description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

```tsx
// 📋 src/pages/TodolistPage.tsx
{
  tasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      description={task.description}
      isDone={task.isDone}
    />
  ));
}
```

---

## เช็กก่อนส่ง

```bash
pnpm run build   # ต้องผ่าน (ไม่มี error)
pnpm run lint    # ควรผ่าน
```
