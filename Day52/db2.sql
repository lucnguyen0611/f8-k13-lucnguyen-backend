-- Câu 1: Tạo các bảng: users, categories, products, orders, order_items
CREATE TABLE users(
                      id SERIAL PRIMARY KEY,
                      full_name VARCHAR(100),
                      email VARCHAR(100) UNIQUE,
                      gender VARCHAR(10),
                      date_of_birth DATE,
                      country_code VARCHAR(2),
                      created_at TIMESTAMP
);

CREATE TABLE categories (
                            id SERIAL PRIMARY KEY,
                            category_name VARCHAR(100) UNIQUE,
                            parent_category_id INTEGER REFERENCES categories(id)
);

CREATE TABLE products (
                          id SERIAL PRIMARY KEY,
                          product_name VARCHAR(255),
                          price DECIMAL(10, 2),
                          category_id INTEGER REFERENCES categories(id),
                          created_at TIMESTAMP
);

CREATE TABLE orders (
                        id SERIAL PRIMARY KEY,
                        user_id INTEGER REFERENCES users(id),
                        status VARCHAR(20),
                        created_at TIMESTAMP
);

CREATE TABLE order_items (
                             order_id INTEGER REFERENCES orders(id),
                             product_id INTEGER REFERENCES products(id),
                             quantity INTEGER,
                             price_at_purchase DECIMAL(10, 2),
                             PRIMARY KEY (order_id, product_id)
);
-- Câu 2: Tạo dữ liệu lớn:
-- Tạo 10,000 người dùng
-- Tạo 10 danh mục sản phẩm
-- Tạo 1,000 sản phẩm
-- Tạo 20,000 đơn hàng
-- 50,000 chi tiết đơn hàng

-- -- 2.1 Tạo 10,000 người dùng
INSERT INTO users (full_name, email, gender, date_of_birth, country_code)
SELECT
    'User ' || s,
    'user' || s || '@example.com',
    CASE WHEN random() < 0.5 THEN 'male' ELSE 'female' END,
    '1990-01-01'::date + (random() * 365 * 20)::int,
    (ARRAY['VN', 'US', 'SG', 'JP', 'KR'])[floor(random() * 5 + 1)]
FROM generate_series(1, 10000) s;

-- -- 2.2 Tạo 10 danh mục sản phẩm
INSERT INTO categories (category_name)
SELECT 'Category ' || s FROM generate_series(1, 10) s;

-- 2.3 Tạo 1,000 sản phẩm
INSERT INTO products (product_name, price, category_id)
SELECT
    'Product ' || s,
    (random() * 1000)::DECIMAL(10, 2),
    floor(random() * 10 + 1)
FROM generate_series(1, 1000) s;

-- 2.4 Tạo 20,000 đơn hàng
INSERT INTO orders (user_id, status, created_at)
SELECT
    floor(random() * 10000 + 1),
    (ARRAY['completed', 'pending', 'cancelled'])[floor(random() * 3 + 1)],
    '2022-01-01'::timestamp + (random() * 730 * 86400) * interval '1 second'
FROM generate_series(1, 20000) s;

-- 2.5 Tạo 50,000 chi tiết đơn hàng
INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
SELECT
    floor(random() * 20000 + 1),
    floor(random() * 1000 + 1),
    floor(random() * 5 + 1),
    (random() * 1000)::DECIMAL(10, 2)
FROM generate_series(1, 50000) s
    ON CONFLICT (order_id, product_id) DO NOTHING;

-- Câu 3: Thống kê tổng doanh thu theo từng sản phẩm, chỉ hiển thị sản phẩm có doanh thu > 500,000
select products.id,
       products.product_name,
       sum(order_items.quantity * order_items.price_at_purchase) as income
from products
         join order_items on products.id = order_items.product_id
group by products.id, products.product_name
having sum(order_items.quantity * order_items.price_at_purchase) > 100000
order by products.id;

-- Câu 4: Tìm khách hàng ở 'VN' đã đặt trên 5 đơn hàng 'completed'
SELECT u.id, u.full_name, COUNT(o.id) AS completed_orders
FROM users u
         JOIN orders o ON u.id = o.user_id
WHERE u.country_code = 'VN' AND o.status = 'completed'
GROUP BY u.id, u.full_name
HAVING COUNT(o.id) > 5;

-- Câu 5: Đếm số lượng sản phẩm trong mỗi danh mục, sắp xếp theo tên danh mục
SELECT c.id, c.category_name, COUNT(p.category_id) AS product_count
FROM categories c
         JOIN products p ON p.category_id = c.id
GROUP BY c.id, c.category_name
ORDER BY c.id;

-- Câu 6: Tìm sản phẩm chưa từng được bán ra (subquery)
SELECT *
FROM products
WHERE id NOT IN (
-- DISTINCT dùng để loại bỏ các giá trị trùng lặp trong kết quả truy vấn.
-- Nó chỉ giữ lại mỗi giá trị duy nhất một lần.
    SELECT DISTINCT product_id FROM order_items
);

-- Câu 7: Tìm top 10 khách hàng chi tiêu cao nhất năm 2024 (WITH)
WITH customer_spending AS (
    SELECT
        o.user_id,
        SUM(oi.quantity * oi.price_at_purchase) AS total_spent
    FROM orders o
             JOIN order_items oi ON o.id = oi.order_id
    WHERE o.status = 'completed' AND o.created_at BETWEEN '2023-01-01' AND '2023-12-31'
    GROUP BY o.user_id
)
SELECT u.id, u.full_name, c.total_spent
FROM customer_spending c
         JOIN users u ON c.user_id = u.id
ORDER BY c.total_spent DESC
    LIMIT 10;

-- Câu 8: Tạo index bao gồm cả email và country_code từ bảng users. Truy vấn chỉ các cột có trong index.
CREATE INDEX idx_users_email_country ON users(email, country_code);

EXPLAIN ANALYZE
SELECT email, country_code
FROM users
WHERE email LIKE 'user1%' AND country_code = 'VN';