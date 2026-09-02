/*  Note: interface TaskCardProps
 *
 * interface = "สัญญา" ว่า Component นี้รับ prop อะไรบ้าง ชนิดอะไร
 * ถ้าส่ง prop ผิดชนิด / ลืม prop ที่บังคับ -> TypeScript ฟ้อง error ทันที
 *
 *  id: string; -> prop บังคับ (ต้องส่ง) และเป็น string
 *  title: string;
 *  description: string;
 *  isDone: boolean; -> เป็น boolean true/false เท่านั้น
 */

interface TaskCardProps {
  id: string;
}

export type { TaskCardProps };
