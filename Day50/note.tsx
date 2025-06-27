// # drop table if exists employee;
// # CREATE TABLE if not exists employee (
// #     id bigserial primary key ,
// #     name text,
// #     age int,
// #     address text,
// #     active bool default true
// # );
//
// # drop table if exists company;
// # CREATE TABLE if not exists company (
// #     id bigserial primary key ,
// #     name text,
// #     active bool
// # );
// # insert into company(name) values ('fpt'), ('f8'), ('f88');
//
// # insert into employee(name, age, address)
// # values ('test 2', 20, 'ha noi'),
// #         ( 'test 3', 20, 'ha noi');
//
// # alter table employee add column active bool default true;
// # alter  table employee drop column active;
// # alter  table employee rename column name to fullname;
// # alter table employee add column fullname text;
// # alter table employee add column company_id int;
//
//
// # update employee set address = 'thanh oai, ha noi' where id = 2;
// # update employee set address = 'tp.HCM' where id < 2;
//
// # delete from employee where id = 3;
// # update employee set fullname = concat(name, id) where true;
//
// # select * from employee where true;
// # select id, name from employee;
//
// # select
// #     employee.id as name,
// #     employee.name as name,
// #     employee.age,
// #     employee.address,
// #     jsonb_build_object(
// #         'id', company.id, 'name', company.name
// #     ) as company
// # from employee
// # join company on company.id = employee.company_id