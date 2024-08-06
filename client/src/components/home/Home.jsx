import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.userSlice.login);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to Oracle GUI Services
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop solution for all your needs.
          </p>
          <Link
            to="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature: Create and Manage Tables */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Create and Manage Tables
              </h3>
              <p className="text-gray-700">
                Easily create, modify, and manage database tables with our
                intuitive GUI. Supports advanced table management
                functionalities including adding, dropping, and altering
                columns.
              </p>
            </div>
            {/* Feature: Seamless Data Operations */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Seamless Data Operations
              </h3>
              <p className="text-gray-700">
                Perform data operations such as inserting, updating, and
                deleting records with ease. Our interface ensures accuracy and
                efficiency in handling your database transactions.
              </p>
            </div>
            {/* Feature: Schema and Data Visualization */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Schema and Data Visualization
              </h3>
              <p className="text-gray-700">
                Visualize your database schema and data effortlessly. Our tool
                provides detailed views and insights into your tables, helping
                you manage and understand your data structure better.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-2xl mb-6 text-center mt-8">
            Perform Oracle operations in just one click
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      {!isLoggedIn && (
        <section className="bg-gray-900 text-white py-12 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Sign up now to unlock all features and start using our services.
            </p>
            <Link
              to="/sign-up"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </section>
      )}

      {/* Doc */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Learn</h2>
          <p className="text-lg mb-6">
            Discover comprehensive resources and tutorials to master SQL and
            Oracle database management. Whether you're a beginner or looking to
            refine your skills, our documentation has you covered.
          </p>
          <Link
            to="/learn/introduction"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Explore Documentation
          </Link>
        </div>
      </section>

      {/* SQL Terminal */}
      <section className="bg-gray-100 text-gray-500 py-10 flex flex-col justify-center items-center text-center">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Interactive SQL Terminal
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Unlock the full potential of your database with our intuitive SQL
            Terminal. Write, execute, and visualize your SQL queries
            effortlessly!
          </p>
          <Link
            to="/sql-terminal"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Try SQL Terminal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
