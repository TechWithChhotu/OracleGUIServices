import React from "react";

const SQLAndOracleDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        SQL and Oracle Documentation
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* SQL Documentation */}
        <section id="sql" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What is SQL?</h2>
          <p className="text-gray-700 mb-6">
            Structured Query Language (SQL) is a standard programming language
            specifically designed for managing and manipulating relational
            databases. SQL allows you to perform various operations on data,
            such as querying, updating, inserting, and deleting.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Key Concepts</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>
              <strong>Queries:</strong> Retrieve data from databases using{" "}
              <code>SELECT</code> statements.
            </li>
            <li>
              <strong>DML Operations:</strong> Insert (<code>INSERT</code>),
              update (<code>UPDATE</code>), and delete (<code>DELETE</code>)
              data.
            </li>
            <li>
              <strong>DDL Operations:</strong> Define and modify database
              structures using commands like <code>CREATE TABLE</code>,{" "}
              <code>ALTER TABLE</code>, and <code>DROP TABLE</code>.
            </li>
            <li>
              <strong>Data Integrity:</strong> Ensure the accuracy and
              consistency of data through constraints and transactions.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Basic SQL Syntax</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
-- Query to select all records from a table
SELECT * FROM table_name;

-- Insert a new record into a table
INSERT INTO table_name (column1, column2) VALUES (value1, value2);

-- Update existing records in a table
UPDATE table_name SET column1 = value1 WHERE condition;

-- Delete records from a table
DELETE FROM table_name WHERE condition;
            `}
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Example</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
-- Create a new table
CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  LastName VARCHAR(255) NOT NULL,
  FirstName VARCHAR(255),
  BirthDate DATE
);

-- Insert a new employee
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate)
VALUES (1, 'Doe', 'John', '1980-01-01');

-- Query all employees
SELECT * FROM Employees;
            `}
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Explanation</h3>
          <p className="text-gray-700 mb-6">
            In the above example:
            <ul className="list-disc list-inside mb-6">
              <li>
                <strong>CREATE TABLE Employees:</strong> Creates a table named{" "}
                <code>Employees</code> with columns <code>EmployeeID</code>,{" "}
                <code>LastName</code>, <code>FirstName</code>, and{" "}
                <code>BirthDate</code>.
              </li>
              <li>
                <strong>INSERT INTO Employees:</strong> Adds a new record to the{" "}
                <code>Employees</code> table.
              </li>
              <li>
                <strong>SELECT * FROM Employees:</strong> Retrieves all records
                from the <code>Employees</code> table.
              </li>
            </ul>
          </p>
        </section>

        {/* Oracle Documentation */}
        <section id="oracle">
          <h2 className="text-3xl font-semibold mb-6">What is Oracle?</h2>
          <p className="text-gray-700 mb-6">
            Oracle Database is a multi-model database management system
            developed by Oracle Corporation. It provides a comprehensive suite
            of tools for managing complex database environments, including SQL
            support, high availability, and robust security features.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>
              <strong>SQL and PL/SQL Support:</strong> Advanced SQL querying and
              procedural programming using PL/SQL.
            </li>
            <li>
              <strong>High Availability:</strong> Features like Data Guard and
              Real Application Clusters (RAC) to ensure database uptime.
            </li>
            <li>
              <strong>Scalability:</strong> Supports large-scale databases and
              high transaction volumes.
            </li>
            <li>
              <strong>Security:</strong> Advanced security features to protect
              data and manage user access.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Basic Oracle Syntax</h3>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
-- Create a table in Oracle
CREATE TABLE Employees (
  EmployeeID NUMBER PRIMARY KEY,
  LastName VARCHAR2(255) NOT NULL,
  FirstName VARCHAR2(255),
  BirthDate DATE
);

-- Insert a new record
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate)
VALUES (1, 'Doe', 'John', TO_DATE('1980-01-01', 'YYYY-MM-DD'));

-- Query all records
SELECT * FROM Employees;

-- Update a record
UPDATE Employees SET LastName = 'Smith' WHERE EmployeeID = 1;

-- Delete a record
DELETE FROM Employees WHERE EmployeeID = 1;
            `}
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Explanation</h3>
          <p className="text-gray-700 mb-6">
            In Oracle:
            <ul className="list-disc list-inside mb-6">
              <li>
                <strong>CREATE TABLE Employees:</strong> Creates a table with
                the specified columns and data types.
              </li>
              <li>
                <strong>INSERT INTO Employees:</strong> Adds a new record with
                date formatting using <code>TO_DATE</code>.
              </li>
              <li>
                <strong>SELECT * FROM Employees:</strong> Retrieves all records
                from the table.
              </li>
              <li>
                <strong>UPDATE Employees:</strong> Modifies existing records
                based on a condition.
              </li>
              <li>
                <strong>DELETE FROM Employees:</strong> Removes records from the
                table based on a condition.
              </li>
            </ul>
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Resources to Learn More
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>
              <strong>Books:</strong> "SQL in 10 Minutes, Sams Teach Yourself"
              by Ben Forta, "Oracle Database 12c SQL" by Jason Price
            </li>
            <li>
              <strong>Online Courses:</strong> [Oracle's SQL and PL/SQL
              Tutorial](https://docs.oracle.com/en/database/), [SQL for Data
              Science on
              Coursera](https://www.coursera.org/learn/sql-for-data-science)
            </li>
            <li>
              <strong>Practice Platforms:</strong> [LeetCode SQL
              Problems](https://leetcode.com/problemset/all/?topicSlugs=sql),
              [Hackerrank SQL
              Challenges](https://www.hackerrank.com/domains/tutorials/10-days-of-sql)
            </li>
            <li>
              <strong>Official Documentation:</strong> [Oracle SQL
              Documentation](https://docs.oracle.com/en/database/), [SQL
              Standard Documentation](https://www.iso.org/standard/63555.html)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SQLAndOracleDocumentation;
