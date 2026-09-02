/* Note: interface SidebarProps

 * interface = "สัญญา" ว่า Component นี้รับ prop อะไรบ้าง ชนิดอะไร
 * ถ้าส่ง prop ผิดชนิด / ลืม prop ที่บังคับ -> TypeScript ฟ้อง error ทันที
 * 
 *   userName: string           ->  prop บังคับ (ต้องส่ง) และเป็น string
 *   type?: "admin" | "student" -> prop ไม่บังคับ (มี ?) และเป็น union: ใส่ได้แค่ 2 ค่านี้ 
 */
interface SidebarProps {
  userName: string;
  type?: "admin" | "student";
}
export type { SidebarProps };
