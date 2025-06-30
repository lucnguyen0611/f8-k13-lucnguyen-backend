-- Câu 1: Tạo bảng departments để lưu thông tin phòng ban:
CREATE TABLE departments (
                             id SERIAL PRIMARY KEY,
                             name VARCHAR(50)
);

-- Câu 2: Tạo bảng employees để lưu thông tin nhân viên:
CREATE TABLE employees (
                           id SERIAL PRIMARY KEY,
                           name VARCHAR(50),
                           salary INT ,
                           department_id INT REFERENCES departments(id),
                           hire_date DATE
);

-- Câu 3: Thêm cột position (chức vụ, kiểu chuỗi) vào bảng employees
ALTER TABLE employees ADD COLUMN position VARCHAR(50);

UPDATE employees e
SET position = d.name
    FROM departments d
WHERE e.department_id = d.id;

-- Câu 4: Đổi tên cột salary thành monthly_salary
ALTER TABLE employees RENAME COLUMN salary TO monthly_salary;

--Câu 5: Thêm tối thiểu 5 bản ghi phòng ban.
INSERT INTO departments (name)
VALUES
    ('Phòng Nhân sự'),
    ('Phòng Kế toán'),
    ('Phòng Kỹ thuật'),
    ('Phòng Kinh doanh'),
    ('Phòng Marketing');

-- Câu 6: Thêm tối thiểu 10 bản ghi nhân viên, gán cho các phòng ban khác nhau.
INSERT INTO employees (name, monthly_salary, department_id, hire_date)
VALUES
    ('Nguyễn Văn A', 12000000, 1, '2022-01-15'),
    ('Trần Thị B', 10000000, 2, '2021-07-20'),
    ('Lê Văn C', 15000000, 3, '2023-03-10'),
    ('Phạm Thị D', 11000000, 4, '2022-05-12'),
    ('Hoàng Văn E', 13000000, 5, '2020-11-01'),
    ('Đặng Thị F', 12500000, 1, '2021-09-18'),
    ('Vũ Văn G', 14000000, 2, '2023-01-25'),
    ('Ngô Thị H', 9500000, 3, '2022-06-30'),
    ('Bùi Văn I', 16000000, 4, '2021-12-05'),
    ('Trịnh Thị K', 10500000, 5, '2020-08-22');

-- Câu 7: Truy vấn tất cả nhân viên.
SELECT * FROM employees;

-- Câu 8: Truy vấn nhân viên thuộc một phòng ban cụ thể.
SELECT *
FROM employees
WHERE department_id = 2;

-- Câu 9: Đếm số lượng nhân viên theo từng phòng ban.
SELECT d.name AS department_name, COUNT(e.id) AS total_employees
FROM departments d
         LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.name
ORDER BY total_employees DESC;

-- Câu 10: Tính tổng lương theo từng phòng ban. ( Sử dụng count() và sum() )
SELECT
    d.name AS department_name,
    COUNT(e.id) AS total_employees,
    SUM(e.monthly_salary) AS total_salary
FROM departments d
         LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.name
ORDER BY total_salary DESC;

-- Câu 11: Sắp xếp nhân viên theo lương giảm dần.
SELECT
    *
FROM employees
ORDER BY monthly_salary DESC;

-- Câu 12: Sắp xếp nhân viên theo ngày vào làm tăng dần.
SELECT
    *
FROM employees
ORDER BY monthly_salary;

-- Câu 13: Hiển thị các phòng ban có hơn 3 nhân viên.
SELECT d.name AS department_name, COUNT(e.id) AS total_employees
FROM departments d
         JOIN employees e ON d.id = e.department_id
GROUP BY d.name
HAVING COUNT(e.id) > 3;

-- Câu 14: Hiển thị các phòng ban có tổng lương > 30,000.
SELECT d.name AS department_name, SUM(e.monthly_salary) AS total_monthly_salary
FROM departments d
         JOIN employees e ON d.id = e.department_id
GROUP BY d.name
HAVING SUM(e.monthly_salary) > 30000;

-- Câu 15: Tìm nhân viên có lương cao hơn mức lương trung bình toàn công ty.
SELECT *
FROM employees
WHERE monthly_salary > (
    SELECT AVG(monthly_salary) FROM employees
);

-- Câu 16: Tìm tên phòng ban có nhân viên lương cao nhất.
SELECT d.name AS department_name
FROM employees e
         JOIN departments d ON e.department_id = d.id
WHERE e.monthly_salary = (
    SELECT MAX(monthly_salary) FROM employees
);

-- Câu 17: Dùng WITH để tính mức lương trung bình từng phòng ban.
WITH avg_salary_per_department AS (
    SELECT
        d.name AS department_name,
        AVG(e.monthly_salary) AS avg_salary
    FROM employees e
             JOIN departments d ON e.department_id = d.id
    GROUP BY d.name
)
SELECT * FROM avg_salary_per_department;

-- Câu 18: Dùng kết quả trên để liệt kê nhân viên có lương cao hơn mức trung bình của phòng ban của họ
WITH avg_salary_per_department AS (
    SELECT department_id, AVG(monthly_salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT e.*
FROM employees e
         JOIN avg_salary_per_department a ON e.department_id = a.department_id
WHERE e.monthly_salary > a.avg_salary;

-- Câu 19: Truy vấn danh sách phòng ban, kèm theo mảng nhân viên của từng phòng ban dưới dạng JSON.
SELECT
    d.name AS department_name,
    json_agg(
            json_build_object(
                    'id', e.id,
                    'name', e.name,
                    'salary', e.monthly_salary,
                    'hire_date', e.hire_date
            )
    ) AS employees
FROM departments d
         LEFT JOIN employees e ON d.id = e.department_id
GROUP BY d.name;

-- Câu 20: Tạo cột tạm phân loại lương:****≥ 15,000 → Cao,< 15,000 → Thấp
SELECT
    id, name, monthly_salary,
    CASE
        WHEN monthly_salary >= 12000 THEN 'Cao'
        ELSE 'Thấp'
        END AS salary_level
FROM employees;

-- Câu 21: Phân loại cấp bậc nhân viên: Manager → Cấp cao, Staff → Cấp thấp
SELECT
    id, name, position,
    CASE
        WHEN position IN ('Phòng Kỹ thuật', 'Phòng Kinh doanh') THEN 'Cấp cao'
        WHEN position IN ('Phòng Nhân sự', 'Phòng Kế toán', 'Phòng Marketing') THEN 'Cấp thấp'
        ELSE 'Không xác định'
        END AS level
FROM employees;

-- Câu 22: Dùng EXPLAIN ANALYZE để phân tích truy vấn lấy tất cả nhân viên theo phòng ban
EXPLAIN ANALYZE
SELECT e.*, d.name AS department_name
FROM employees e
         JOIN departments d ON e.department_id = d.id;


-- Câu 23: Phân tích truy vấn tìm nhân viên có lương cao hơn trung bình
EXPLAIN ANALYZE
SELECT *
FROM employees
WHERE monthly_salary > (
    SELECT AVG(monthly_salary) FROM employees
);
