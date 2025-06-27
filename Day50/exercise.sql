-- Câu 1: Tạo bảng students
CREATE TABLE students (
                          student_id SERIAL PRIMARY KEY,
                          full_name VARCHAR(255),
                          email VARCHAR(255) UNIQUE,
                          birth_date DATE
);

-- Câu 2: Tạo bảng teachers
CREATE TABLE teachers (
                          teacher_id SERIAL PRIMARY KEY,
                          full_name VARCHAR(255),
                          department VARCHAR(255)
);

-- Câu 3: Tạo bảng courses
CREATE TABLE courses (
                         course_id SERIAL PRIMARY KEY,
                         course_name VARCHAR(255),
                         teacher_id INT REFERENCES teachers(teacher_id)
);

-- Câu 4: Tạo bảng enrollments
CREATE TABLE enrollments (
                             enrollment_id SERIAL PRIMARY KEY,
                             student_id INT REFERENCES students(student_id),
                             course_id INT REFERENCES courses(course_id),
                             enrolled_at DATE DEFAULT CURRENT_DATE
);

-- Câu 5: Thêm cột phone vào students
ALTER TABLE students ADD COLUMN phone VARCHAR(20);

-- Câu 6: Thêm 3 sinh viên
INSERT INTO students (full_name, email, birth_date, phone) VALUES
                                                               ('Huy', 'huy@gmail.com', '2001-01-01', '0901234567'),
                                                               ('Luc', 'luc@gmail.com', '2002-02-02', '0912345678'),
                                                               ('Trung', 'trung@gmail.com', '2003-03-03', '0923456789');

-- Câu 7: Thêm 2 giảng viên
INSERT INTO teachers (full_name, department) VALUES
                                                 ('Bang', 'Backend'),
                                                 ('Ming', 'Frontend');

-- Câu 8: Thêm 3 khóa học
INSERT INTO courses (course_name, teacher_id) VALUES
                                                  ('Postgres', 1),
                                                  ('React', 2),
                                                  ('SQL', NULL); -- chưa có giảng viên

-- Câu 9: Thêm 5 lượt đăng ký học
INSERT INTO enrollments (student_id, course_id) VALUES
                                                    (1, 1),
                                                    (1, 2),
                                                    (2, 2),
                                                    (3, 1),
                                                    (3, 3);

-- Câu 10: Hiển thị tất cả sinh viên
SELECT * FROM students;

-- Câu 11: Liệt kê khóa học và tên giảng viên
SELECT c.course_name, t.full_name AS teacher_name
FROM courses c
         JOIN teachers t ON c.teacher_id = t.teacher_id;

-- Câu 12: Liệt kê tên sinh viên và tên các khóa học họ đã đăng ký
SELECT s.full_name AS student_name, c.course_name
FROM enrollments e
         JOIN students s ON e.student_id = s.student_id
         JOIN courses c ON e.course_id = c.course_id;

-- Câu 13: Cập nhật số điện thoại sinh viên có email luc@gmail.com
UPDATE students
SET phone = '0987654320'
WHERE email = 'luc@gmail.com';

-- Câu 14: Cập nhật tên môn học "React" thành "Javascript"
UPDATE courses
SET course_name = 'Javascript'
WHERE course_name = 'React';

-- Câu 15: Xoá sinh viên có email huy@gmail.com
DELETE FROM students
WHERE email = 'huy@gmail.com';

-- Câu 16: Xoá môn học có tên “SQL”
DELETE FROM courses
WHERE course_name = 'SQL';

-- Câu 17: Liệt kê tên các môn học và tên giảng viên phụ trách
SELECT c.course_name, t.full_name AS teacher_name
FROM courses c
         JOIN teachers t ON c.teacher_id = t.teacher_id;

-- Câu 18: Liệt kê tất cả các môn học và tên giảng viên (nếu có)
SELECT c.course_name, t.full_name AS teacher_name
FROM courses c
         LEFT JOIN teachers t ON c.teacher_id = t.teacher_id;

-- Câu 19: Hiển thị tên sinh viên và mã khóa học mà họ đã đăng ký
SELECT s.full_name AS student_name, c.course_id
FROM enrollments e
         JOIN students s ON e.student_id = s.student_id
         JOIN courses c ON e.course_id = c.course_id;

-- Câu 20*: Hiển thị toàn bộ môn học và sinh viên đăng ký (nếu có)
SELECT c.course_name, s.full_name AS student_name
FROM courses c
         LEFT JOIN enrollments e ON c.course_id = e.course_id
         LEFT JOIN students s ON e.student_id = s.student_id;