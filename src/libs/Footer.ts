/* Note: interface FooterProps
 * interface = "สัญญา" ว่า Component นี้รับ prop อะไรบ้าง ชนิดอะไร
 * ถ้าส่ง prop ผิดชนิด / ลืม prop ที่บังคับ -> TypeScript ฟ้อง error ทันที
 *   year: string;                 -> ปี ค.ศ. เก็บเป็นข้อความ string ""
 *   fullName: string;
 *   studentId: string | number;   -> union type: เป็น string หรือ number ก็ได้
 * (prop ที่ไม่บังคับ ใส่ ? เช่น note?: string)
 */

interface FooterProps {
  year: string;
}

export type { FooterProps };
