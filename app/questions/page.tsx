'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Brain, CheckCircle, CircleHelp } from 'lucide-react';
import Link from 'next/link';

// Mock data for the questions
const questionsData = [
  {
    question_number: '1',
    question: 'What is the difference between compilation and interpretation?',
    answer:
      'Compilation translates source code into machine code creating an executable file. Interpretation translates and executes code line by line without an executable.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '2',
    question: 'Explain the concept of polymorphism.',
    answer:
      'Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling method overriding.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '3',
    question: 'Define encapsulation and give an example.',
    answer:
      'Encapsulation bundles data and methods in a class, restricting direct data access. Example: class with private data and public methods.',
    category: 'General Programming',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '4',
    question:
      'What is an abstract class, and how is it different from an interface?',
    answer:
      "An abstract class can't be instantiated and can have abstract and concrete methods. An interface only has method signatures without implementations.",
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '5',
    question: 'Describe the principles of Object-Oriented Programming (OOP).',
    answer:
      'OOP principles include encapsulation, inheritance, polymorphism, and abstraction, promoting organized and maintainable code.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '6',
    question: 'What is the purpose of a constructor?',
    answer:
      'A constructor initializes object properties upon class instantiation, ensuring a well-defined state.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '7',
    question: 'Explain the difference between stack and heap memory.',
    answer:
      'Stack memory stores local variables and function calls; heap memory is for dynamic allocation. Stack operates in LIFO, heap managed manually or by garbage collection.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '8',
    question: 'What is a design pattern, and can you name a few?',
    answer:
      'Design patterns are solutions to common design problems. Examples: Singleton, Factory, Observer, MVC.',
    category: 'General Programming',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '9',
    question: 'Define the term "DRY" in software development.',
    answer:
      "DRY (Don't Repeat Yourself) advocates for avoiding code duplication by reusing existing code.",
    category: 'General Programming',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '10',
    question: 'What is the SOLID principle?',
    answer:
      'SOLID represents five design principles for OOP: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',
    category: 'General Program',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '11',
    question: 'What is the difference between an array and a linked list?',
    answer:
      'An array has fixed size and stores elements in contiguous memory; a linked list consists of nodes with data and references, allowing dynamic size.',
    category: 'Data Structures',
    difficulty: 'Easy',
    completed: true,
  },
  {
    question_number: '12',
    question: 'Explain the time complexity of an algorithm.',
    answer:
      'Time complexity measures the time an algorithm takes relative to its input size, expressed in Big O notation.',
    category: 'Data Structures',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '13',
    question:
      'Describe the difference between a binary search tree and a hash table.',
    answer:
      'A binary search tree is hierarchical, maintaining order; a hash table maps keys to values for fast retrieval, without maintaining order.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '14',
    question: 'What is a linked list and how does it work?',
    answer:
      'A linked list is a series of nodes each containing data and a reference to the next node, allowing dynamic memory allocation and efficient insertions/deletions.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '15',
    question: 'Explain the concept of recursion.',
    answer:
      'Recursion is when a function calls itself to solve subproblems, with a base case to terminate recursion.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '16',
    question: 'What is Big O notation, and why is it important?',
    answer:
      'Big O notation describes the upper bound of algorithm time complexity, important for comparing efficiency and growth rates.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '17',
    question: 'How do you perform a binary search on a sorted array?',
    answer:
      'Binary search divides the search interval in half, repeatedly comparing the middle element to the target.',
    category: 'Data Structures',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '18',
    question:
      'Discuss the advantages and disadvantages of different sorting algorithms.',
    answer:
      'Sorting algorithms vary in time/space complexity and stability. Quick Sort and Merge Sort are fast but more complex; Insertion and Bubble Sort are simple but slower.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '19',
    question: 'Explain how a hash table works.',
    answer:
      'A hash table uses a hash function to map keys to values in an array, allowing fast O(1) access.',
    category: 'Data Structures',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '20',
    question: 'What is dynamic programming?',
    answer:
      'Dynamic programming solves complex problems by dividing them into smaller subproblems, avoiding redundant calculations.',
    category: 'Data Structures',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '21',
    question: 'What is the difference between Java and JavaScript?',
    answer:
      'Java is a compiled, statically-typed language used for server-side, mobile, and desktop apps. JavaScript is an interpreted, dynamically-typed language for web development.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '22',
    question: 'Describe the MVC architectural pattern.',
    answer:
      'MVC divides an application into Model (data), View (UI), and Controller (input handling), promoting separation of concerns.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '23',
    question: 'What is a RESTful API?',
    answer:
      'RESTful API is a web service implementation using HTTP methods to perform CRUD operations on resources, adhering to stateless, client-server architecture.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '24',
    question: 'Explain the use of "this" keyword in JavaScript.',
    answer:
      '"this" in JavaScript refers to the execution context, varying based on function calling, global scope, or event handlers.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '25',
    question: 'What is a closure in programming?',
    answer:
      'A closure is a function with access to its outer scope variables even after the outer function has executed.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '26',
    question: 'What are the differences between Python 2 and Python 3?',
    answer:
      'Python 3 has print as a function, true division, Unicode support by default, and different syntax for exceptions, unlike Python 2.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '27',
    question: 'Discuss the role of a package manager like npm or pip.',
    answer:
      'Package managers manage installation, update, and dependency resolution of libraries, simplifying library management in development.',
    category: 'Languages and Frameworks',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '28',
    question: 'Explain the concept of multi-threading in Java.',
    answer:
      'Multi-threading in Java allows concurrent execution of multiple threads, improving application responsiveness and performance.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '29',
    question: 'What is a Singleton pattern?',
    answer:
      'Singleton ensures a class has only one instance and provides a global access point to it, useful for shared resources.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '30',
    question: 'What is a virtual function in C++?',
    answer:
      'Virtual functions in C++ allow derived classes to override them, enabling runtime polymorphism and dynamic method dispatch.',
    category: 'Languages and Frameworks',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '31',
    question: 'What is a database index, and why is it important?',
    answer:
      "A database index speeds up data retrieval, similar to a book's index, improving query performance.",
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '32',
    question: 'Explain the differences between SQL and NoSQL databases.',
    answer:
      'SQL databases use structured query language with a predefined schema; NoSQL databases store schema-less data with flexible models.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '33',
    question: 'What is a foreign key in a database?',
    answer:
      'A foreign key links two tables by referring to the primary key in another table, ensuring referential integrity.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '34',
    question: 'Describe the ACID properties in database transactions.',
    answer:
      'ACID: Atomicity (indivisible transactions), Consistency (consistent state transitions), Isolation (independent transactions), Durability (persisted changes).',
    category: 'Database and SQL',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '35',
    question: 'How do you optimize a SQL query for better performance?',
    answer:
      'Optimize using indexes, efficient SQL, limiting data retrieval, analyzing query performance, and considering denormalization.',
    category: 'Database and SQL',
    difficulty: 'Easy',
    completed: false,
  },
  {
    question_number: '36',
    question: 'What is normalization in database design?',
    answer:
      'Normalization organizes data into separate tables to reduce redundancy and improve integrity, following normalization forms.',
    category: 'Database and SQL',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '37',
    question: 'Explain the difference between INNER JOIN and LEFT JOIN in SQL.',
    answer:
      'INNER JOIN returns matching rows from both tables; LEFT JOIN returns all rows from the left table and matching rows from the right.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '38',
    question: 'What is a stored procedure, and when would you use one?',
    answer:
      'Stored procedures are precompiled SQL statements for data manipulation and logic, used for repetitive tasks and improving performance.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '39',
    question: 'What is database denormalization, and when is it appropriate?',
    answer:
      'Denormalization introduces redundancy for performance, useful in read-heavy scenarios at the expense of storage and complexity.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '40',
    question: 'Discuss the advantages and disadvantages of using an ORM tool.',
    answer:
      'ORM simplifies database interactions and is language-agnostic. It can introduce performance overhead and may limit database features.',
    category: 'Database and SQL',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '41',
    question: 'What is the Document Object Model (DOM)?',
    answer:
      "The DOM is a tree-like representation of a web page's structure, allowing manipulation of content, structure, and style via programming languages.",
    category: 'Web Development',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '42',
    question: 'Explain the difference between HTTP and HTTPS.',
    answer:
      'HTTP is an unsecured data transmission protocol; HTTPS is secure, encrypting data in transit using SSL/TLS.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '43',
    question: 'What is CORS (Cross-Origin Resource Sharing)?',
    answer:
      'CORS is a security measure allowing or restricting resources requested from another domain, managed via HTTP headers.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '44',
    question: 'Describe the purpose of a web server like Apache or Nginx.',
    answer:
      'Web servers handle HTTP requests, serve content, manage security, routing, and can act as reverse proxies for application servers.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '45',
    question: 'What is a cookie, and how does it work?',
    answer:
      "Cookies are data stored on the user's computer by the web server, sent with HTTP requests for session management, tracking, and storing preferences.",
    category: 'Web Development',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '46',
    question: 'What is a session in web development?',
    answer:
      'A session maintains stateful information across multiple HTTP requests, typically for user authentication and data storage.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '47',
    question: 'Explain the concept of responsive web design.',
    answer:
      'Responsive design ensures web content functions across different devices and screen sizes, using CSS media queries and flexible layouts.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '48',
    question: 'Describe the differences between GET and POST requests.',
    answer:
      'GET requests retrieve data and include parameters in the URL; POST requests send data to the server, encapsulating data in the request body.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '49',
    question: 'What is the importance of SEO in web development?',
    answer:
      "SEO enhances a website's visibility in search engine results, improving organic traffic and user reach through optimized content and structure.",
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '50',
    question: 'How does a web browser render a web page?',
    answer:
      'Browsers parse HTML to create a DOM, fetch resources, build a rendering tree, apply CSS, calculate layout, and paint the page on the screen.',
    category: 'Web Development',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '51',
    question: 'What is unit testing, and why is it important?',
    answer:
      'Unit testing evaluates individual code components, ensuring correctness and facilitating early defect detection.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '52',
    question: 'Explain the difference between black-box and white-box testing.',
    answer:
      'Black-box tests functionality without internal code knowledge; white-box tests internal code logic and structure.',
    category: 'Software Testing',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '53',
    question: 'What is regression testing?',
    answer:
      "Regression testing ensures new code changes don't break existing features, maintaining functionality over updates.",
    category: 'Software Testing',
    difficulty: 'Easy',
    completed: false,
  },
  {
    question_number: '54',
    question: 'Describe the purpose of code reviews.',
    answer:
      'Code reviews identify defects, improve quality, enforce standards, and facilitate knowledge sharing.',
    category: 'Software Testing',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '55',
    question:
      'What is continuous integration (CI) and continuous delivery (CD)?',
    answer:
      'CI involves frequent code integration and testing; CD extends CI by deploying changes to production automatically after testing.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '56',
    question: 'Explain the concept of code coverage in testing.',
    answer:
      'Code coverage measures the extent of code tested, assessing test thoroughness and identifying untested areas.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '57',
    question: 'What is a test case and how do you write one?',
    answer:
      'A test case outlines test conditions, inputs, and expected results, structured with objective, steps, and documentation.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '58',
    question: 'What is load testing, and why is it necessary?',
    answer:
      'Load testing evaluates system performance under expected load conditions, identifying bottlenecks and scalability issues.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '59',
    question: 'Describe the differences between manual and automated testing.',
    answer:
      'Manual testing is human-driven; suitable for exploratory and UX testing. Automated testing uses tools for repetitive tasks; suitable for regression and performance testing.',
    category: 'Software Testing',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '60',
    question: 'What is a bug tracking system?',
    answer:
      'A bug tracking system logs, manages, and resolves issues in software development, ensuring systematic problem handling.',
    category: 'Software Testing',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '61',
    question: 'What is Git, and how does it work?',
    answer:
      'Git is a distributed version control system for tracking changes in source code, allowing collaborative work and branch management.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '62',
    question: 'Explain the difference between Git and SVN (Subversion).',
    answer:
      'Git is distributed, with local repository copies; SVN is centralized, requiring network connectivity for repository access.',
    category: 'Version Control',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '63',
    question: 'What is a merge conflict, and how do you resolve it in Git?',
    answer:
      'Merge conflicts occur when changes in different branches clash. Resolve by manually editing files and committing the result.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '64',
    question: 'Describe the purpose of branching in version control.',
    answer:
      'Branching isolates development work without affecting other parts of the repository, aiding in feature development and experimentation.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '65',
    question: 'What is a pull request (PR), and how does it work?',
    answer:
      'A PR is a request to merge code from one branch to another, facilitating code review and discussion before integration.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '66',
    question: 'How do you handle code conflicts in a team project?',
    answer:
      'Resolve code conflicts through communication, careful review, manual merging, testing, and documenting resolutions.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '67',
    question: 'What is code refactoring, and why is it important?',
    answer:
      'Refactoring improves code structure and readability without altering functionality, enhancing maintainability and quality.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '68',
    question: 'Explain the role of Git branching strategies like GitFlow.',
    answer:
      'GitFlow organizes branches and releases, defining naming conventions and branch purposes for structured and organized development.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '69',
    question: 'What is Git rebase, and when would you use it?',
    answer:
      'Git rebase re-applies commits onto another base for a cleaner history. Use with caution to maintain a linear project history.',
    category: 'Version Control',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '70',
    question: 'Discuss the advantages of distributed version control systems.',
    answer:
      'Distributed systems allow offline work, flexible branching/merging, faster operations, redundancy, and collaborative workflows.',
    category: 'Version Control',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '71',
    question: 'Describe the concept of microservices architecture.',
    answer:
      'Microservices architecture consists of small, independent services communicating via APIs, each responsible for specific functionality, promoting scalability and maintenance.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '72',
    question:
      'What is a load balancer, and why is it used in web applications?',
    answer:
      'A load balancer distributes incoming traffic across servers, ensuring resource efficiency, fault tolerance, and high availability.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '73',
    question: 'Explain the importance of caching in web applications.',
    answer:
      'Caching stores frequently accessed data for faster retrieval, reducing backend load, improving performance, and enhancing user experience.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '74',
    question: 'What is a CDN (Content Delivery Network)?',
    answer:
      'A CDN is a network of servers for delivering content efficiently to users based on geographic proximity, reducing latency and load times.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '75',
    question:
      'Discuss the pros and cons of monolithic vs. microservices architecture.',
    answer:
      'Monolithic is simple but less scalable; microservices offer scalability and flexibility but are complex to manage.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '76',
    question: 'What is a stateless vs. stateful service?',
    answer:
      "Stateless services don't retain client data between requests; stateful services maintain client state, useful for sessions and transactions.",
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '77',
    question: 'Explain the concept of CAP theorem in distributed systems.',
    answer:
      'The CAP theorem states that in a distributed system, you cannot simultaneously guarantee Consistency, Availability, and Partition Tolerance at all times.',
    category: 'System Design',
    difficulty: 'Easy',
    completed: false,
  },
  {
    question_number: '78',
    question: 'How do you ensure data consistency in a distributed database?',
    answer:
      'Ensure consistency using strong consistency models, two-phase commits, optimistic concurrency control, and conflict resolution strategies.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '79',
    question: 'Describe the role of a reverse proxy in a web application.',
    answer:
      'A reverse proxy routes client requests to appropriate servers, providing load balancing, SSL termination, caching, and security.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '80',
    question: 'What is a message broker, and when would you use one?',
    answer:
      'A message broker facilitates communication in distributed systems through asynchronous messaging, used in event-driven architectures and high-volume scenarios.',
    category: 'System Design',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '81',
    question: 'What is SQL injection, and how can it be prevented?',
    answer:
      'SQL injection exploits vulnerabilities to execute malicious SQL. Prevent with parameterized queries, input validation, and least privilege access.',
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '82',
    question: 'Explain the concept of Cross-Site Scripting (XSS).',
    answer:
      "XSS injects malicious scripts into web apps, executed by users' browsers. Prevent with input validation, output encoding, and CSP.",
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '83',
    question: 'What is two-factor authentication (2FA)?',
    answer:
      '2FA adds extra security by requiring two verification forms: something known (password) and something possessed (device).',
    category: 'Security',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '84',
    question: 'Describe the process of password hashing and salting.',
    answer:
      'Hashing transforms passwords into hashes using algorithms; salting adds randomness, enhancing security against attacks.',
    category: 'Security',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '85',
    question: 'What is OAuth, and how does it work?',
    answer:
      'OAuth allows third-party app access to user data without exposing credentials, using access tokens for authorization.',
    category: 'Security',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '86',
    question: 'How do you protect against session fixation attacks?',
    answer:
      'Protect by regenerating session IDs post-authentication, using unpredictable IDs, and tying IDs to user authentication.',
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '87',
    question: 'Explain the principles of least privilege and defense in depth.',
    answer:
      'Least privilege limits access rights; defense in depth layers security. Both minimize attack surfaces and provide redundancy.',
    category: 'Security',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '88',
    question: 'What is a DDoS (Distributed Denial of Service) attack?',
    answer:
      'A DDoS attack overwhelms a target with traffic, causing unavailability. Mitigate with DDoS protection, rate limiting, and traffic analysis.',
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '89',
    question: 'How can you secure sensitive data in a mobile app?',
    answer:
      'Secure data by encrypting at rest and in transit, using secure authentication, and following best practices.',
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '90',
    question: 'Discuss the importance of security in API design.',
    answer:
      'API security is vital to protect data and prevent unauthorized access, using authentication, validation, rate limiting, and encryption.',
    category: 'Security',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '91',
    question: 'What is Docker, and how does it work?',
    answer:
      'Docker is a containerization platform packaging applications with dependencies, ensuring consistent environments across systems.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '92',
    question: 'Explain the concept of container orchestration.',
    answer:
      'Container orchestration automates deployment, scaling, and management of containers, optimizing resource use and handling failures.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '93',
    question:
      'What is Kubernetes, and why is it popular in container management?',
    answer:
      'Kubernetes is an open-source container orchestration platform automating deployment and management, known for its scalability and community support.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '94',
    question:
      'Describe the process of continuous integration and continuous delivery (CI/CD).',
    answer:
      'CI/CD automates build, test, and deployment processes, delivering code changes rapidly and reliably to production.',
    category: 'DevOps',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '95',
    question: 'What is infrastructure as code (IaC)?',
    answer:
      'IaC manages infrastructure using code, ensuring consistency, automation, and version control in deployments.',
    category: 'DevOps',
    difficulty: 'Easy',
    completed: false,
  },
  {
    question_number: '96',
    question: 'How do you monitor the performance of a web application?',
    answer:
      'Monitor using tools to collect and analyze data on response times, resource utilization, error rates, and user experience.',
    category: 'DevOps',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '97',
    question: 'Discuss the importance of automated testing in CI/CD pipelines.',
    answer:
      'Automated testing in CI/CD ensures code changes are defect-free, enhancing reliability and speeding up delivery.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '98',
    question: 'What is Blue-Green deployment, and when would you use it?',
    answer:
      'Blue-Green deployment alternates between two production environments for easy rollbacks and minimal downtime during updates.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '99',
    question:
      'Explain the role of a configuration management tool like Ansible.',
    answer:
      'Configuration management tools automate provisioning and management of software and infrastructure, ensuring consistency and efficiency.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '100',
    question:
      'Describe the benefits of using a cloud platform like AWS, Azure, or Google Cloud.',
    answer:
      'Cloud platforms offer scalability, cost-efficiency, global reach, and managed services, reducing operational burdens with security and compliance features.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '101',
    question: "Explain the concept of 'closure' in JavaScript.",
    answer:
      'A closure is a function that remembers its outer variables and can access them.',
    category: 'Front-end',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '102',
    question: 'Describe the use of Docker in a DevOps environment.',
    answer:
      'Docker allows for packaging applications in containers, facilitating consistent deployment across different environments.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '103',
    question: "What is a 'race condition' in software development?",
    answer:
      "A race condition occurs when the system's behavior depends on the sequence or timing of other uncontrollable events.",
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '104',
    question: "How would you optimize a website's load time?",
    answer:
      'Optimizations can include minimizing HTTP requests, using CDNs, compressing files, caching, etc.',
    category: 'Front-end',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '105',
    question: 'What is the difference between SQL and NoSQL databases?',
    answer:
      'SQL databases are structured, use SQL, and are better for complex queries. NoSQL databases are flexible, scale well, and are good for hierarchical data storage.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '106',
    question: "Can you explain the concept of 'state' in React?",
    answer:
      'State in React is an object that holds some information that may change over the lifecycle of the component.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '107',
    question: 'What is continuous integration in DevOps?',
    answer:
      'Continuous integration is the practice of automating the integration of code changes into a software project.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '108',
    question: 'How do you implement a binary search algorithm?',
    answer:
      "Binary search involves repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed the possibilities to just one.",
    category: 'Full-stack',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '109',
    question: 'Describe the MVC architecture.',
    answer:
      'MVC architecture stands for Model-View-Controller, separating the application into three interconnected components.',
    category: 'Full-stack',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '110',
    question:
      'What are microservices and how do they differ from monolithic architectures?',
    answer:
      'Microservices are a software development technique\u0097a variant of the service-oriented architecture architectural style that structures an application as a collection of loosely coupled services. In a monolithic architecture, all components are interconnected and interdependent.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '111',
    question: "Explain the difference between '==' and '===' in JavaScript.",
    answer:
      "'==' compares values after type conversion, while '===' compares both value and type.",
    category: 'Front-end',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '112',
    question: 'What is Kubernetes and how does it relate to containerization?',
    answer:
      'Kubernetes is an open-source platform for automating deployment, scaling, and operations of application containers across clusters of hosts.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '113',
    question:
      'Describe how you would implement a RESTful API in a back-end application.',
    answer:
      'A RESTful API is implemented by setting up HTTP routes (GET, POST, PUT, DELETE) and handling requests and responses in a stateless manner, often using JSON.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '114',
    question:
      'What are the benefits of server-side rendering vs client-side rendering?',
    answer:
      'Server-side rendering improves initial page load time and SEO, while client-side rendering is good for dynamic websites with less initial loading content.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '115',
    question:
      'How do NoSQL databases handle data scaling compared to traditional SQL databases?',
    answer:
      'NoSQL databases are generally more scalable and provide superior performance for large-scale applications due to their flexibility in handling unstructured data.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '116',
    question: 'Explain the use of hooks in React.',
    answer:
      "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '117',
    question:
      'What is Infrastructure as Code (IaC) and its significance in DevOps?',
    answer:
      'IaC is the management of infrastructure (networks, virtual machines, load balancers, etc.) in a descriptive model, using code, which increases development and deployment speed.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '118',
    question: 'Describe the process of memoization in programming.',
    answer:
      'Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls.',
    category: 'Full-stack',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '119',
    question: 'What are the advantages of using a microservices architecture?',
    answer:
      'Advantages include easier scalability, flexibility in choosing technology, better fault isolation, and improved continuous deployment.',
    category: 'Back-end',
    difficulty: 'Easy',
    completed: true,
  },
  {
    question_number: '120',
    question: 'Explain the SOLID principles in software engineering.',
    answer:
      'SOLID stands for Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles, guiding towards more maintainable, understandable, and flexible software.',
    category: 'Full-stack',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '121',
    question: 'What is lazy loading in web development?',
    answer:
      'Lazy loading is a design pattern that delays loading of non-critical resources at page load time, reducing initial load time and page weight.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '122',
    question: 'Discuss the role of a load balancer in a distributed system.',
    answer:
      'A load balancer distributes network or application traffic across multiple servers to enhance responsiveness and availability of applications.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '123',
    question: 'How does indexing improve database query performance?',
    answer:
      'Indexing speeds up data retrieval operations by effectively creating a smaller, faster version of the database table.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '124',
    question: 'Explain event delegation in JavaScript.',
    answer:
      'Event delegation refers to the practice of using a single event listener to manage all events of a specific type for child elements.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '125',
    question: "Explain the concept of 'closure' in JavaScript.",
    answer:
      'A closure is a function that remembers its outer variables and can access them.',
    category: 'Front-end',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '126',
    question: 'Describe the use of Docker in a DevOps environment.',
    answer:
      'Docker allows for packaging applications in containers, facilitating consistent deployment across different environments.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '127',
    question: "What is a 'race condition' in software development?",
    answer:
      "A race condition occurs when the system's behavior depends on the sequence or timing of other uncontrollable events.",
    category: 'Back-end',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '128',
    question: "How would you optimize a website's load time?",
    answer:
      'Optimizations can include minimizing HTTP requests, using CDNs, compressing files, caching, etc.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '129',
    question: 'What is the difference between SQL and NoSQL databases?',
    answer:
      'SQL databases are structured, use SQL, and are better for complex queries. NoSQL databases are flexible, scale well, and are good for hierarchical data storage.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '130',
    question: "Can you explain the concept of 'state' in React?",
    answer:
      'State in React is an object that holds some information that may change over the lifecycle of the component.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '131',
    question: 'What is continuous integration in DevOps?',
    answer:
      'Continuous integration is the practice of automating the integration of code changes into a software project.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '132',
    question: 'How do you implement a binary search algorithm?',
    answer:
      "Binary search involves repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed the possibilities to just one.",
    category: 'Full-stack',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '133',
    question: 'Describe the MVC architecture.',
    answer:
      'MVC architecture stands for Model-View-Controller, separating the application into three interconnected components.',
    category: 'Full-stack',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '134',
    question:
      'What are microservices and how do they differ from monolithic architectures?',
    answer:
      'Microservices are a software development technique\u0097a variant of the service-oriented architecture architectural style that structures an application as a collection of loosely coupled services. In a monolithic architecture, all components are interconnected and interdependent.',
    category: 'Back-end',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '135',
    question: "Explain the difference between '==' and '===' in JavaScript.",
    answer:
      "'==' compares values after type conversion, while '===' compares both value and type.",
    category: 'Front-end',
    difficulty: 'Easy',
    completed: true,
  },
  {
    question_number: '136',
    question: 'What is Kubernetes and how does it relate to containerization?',
    answer:
      'Kubernetes is an open-source platform for automating deployment, scaling, and operations of application containers across clusters of hosts.',
    category: 'DevOps',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '137',
    question:
      'Describe how you would implement a RESTful API in a back-end application.',
    answer:
      'A RESTful API is implemented by setting up HTTP routes (GET, POST, PUT, DELETE) and handling requests and responses in a stateless manner, often using JSON.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '138',
    question:
      'What are the benefits of server-side rendering vs client-side rendering?',
    answer:
      'Server-side rendering improves initial page load time and SEO, while client-side rendering is good for dynamic websites with less initial loading content.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '139',
    question:
      'How do NoSQL databases handle data scaling compared to traditional SQL databases?',
    answer:
      'NoSQL databases are generally more scalable and provide superior performance for large-scale applications due to their flexibility in handling unstructured data.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '140',
    question: 'Explain the use of hooks in React.',
    answer:
      "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '141',
    question:
      'What is Infrastructure as Code (IaC) and its significance in DevOps?',
    answer:
      'IaC is the management of infrastructure (networks, virtual machines, load balancers, etc.) in a descriptive model, using code, which increases development and deployment speed.',
    category: 'DevOps',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '142',
    question: 'Describe the process of memoization in programming.',
    answer:
      'Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls.',
    category: 'Full-stack',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '143',
    question: 'What are the advantages of using a microservices architecture?',
    answer:
      'Advantages include easier scalability, flexibility in choosing technology, better fault isolation, and improved continuous deployment.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '144',
    question: 'Explain the SOLID principles in software engineering.',
    answer:
      'SOLID stands for Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles, guiding towards more maintainable, understandable, and flexible software.',
    category: 'Full-stack',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '145',
    question: 'What is lazy loading in web development?',
    answer:
      'Lazy loading is a design pattern that delays loading of non-critical resources at page load time, reducing initial load time and page weight.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '146',
    question: 'Discuss the role of a load balancer in a distributed system.',
    answer:
      'A load balancer distributes network or application traffic across multiple servers to enhance responsiveness and availability of applications.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '147',
    question: 'How does indexing improve database query performance?',
    answer:
      'Indexing speeds up data retrieval operations by effectively creating a smaller, faster version of the database table.',
    category: 'Back-end',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '148',
    question: 'Explain event delegation in JavaScript.',
    answer:
      'Event delegation refers to the practice of using a single event listener to manage all events of a specific type for child elements.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '149',
    question: "Explain the concept of 'closure' in JavaScript.",
    answer:
      'A closure is a function that remembers its outer variables and can access them.',
    category: 'Front-end',
    difficulty: 'Medium',
    completed: true,
  },
  {
    question_number: '150',
    question: 'Describe the use of Docker in a DevOps environment.',
    answer:
      'Docker allows for packaging applications in containers, facilitating consistent deployment across different environments.',
    category: 'DevOps',
    difficulty: 'Medium',
    completed: false,
  },
  {
    question_number: '151',
    question: 'Design a distributed key-value store.',
    answer:
      'Focus on data partitioning, replication for fault tolerance, consistency models, and handling node failures.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '152',
    question: 'Implement a function to check if a binary tree is balanced.',
    answer:
      'Use a recursive function to check the height of each subtree; return false if the difference is more than one.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '153',
    question: 'Design a URL shortening service like bit.ly.',
    answer:
      'Consider efficient hashing, collision resolution, database schema, scalability, and API rate limiting.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '154',
    question: 'Design a recommendation system for a large e-commerce platform.',
    answer:
      'Use collaborative filtering, content-based filtering, or hybrid methods; consider scalability and real-time processing.',
    category: 'Machine Learning',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '155',
    question: 'Write an algorithm to find the median of a stream of numbers.',
    answer:
      'Use two heaps (max heap for lower half, min heap for upper half) to maintain the median.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '156',
    question: 'Explain the Raft consensus algorithm.',
    answer:
      'Discuss leader election, log replication, safety, and how Raft achieves consensus in a distributed system.',
    category: 'Distributed Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '157',
    question: 'Optimize a global, high-traffic content delivery network.',
    answer:
      'Use strategies like caching, edge locations, load balancing, and optimizing routing and data compression.',
    category: 'Networking',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '158',
    question: 'Design a chat application that can scale to millions of users.',
    answer:
      'Consider websocket protocol for real-time communication, efficient message broadcasting, and scalable backend architecture.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '159',
    question: 'Implement a garbage collector for a programming language.',
    answer:
      'Understand memory management concepts like mark-and-sweep, reference counting, and generational collection.',
    category: 'Low-level Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '160',
    question: 'Design a scalable notification system for a social network.',
    answer:
      'Focus on system architecture, push vs. pull models, handling peak loads, database optimization, and message queuing.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '161',
    question:
      'Explain the workings of the TCP protocol for a low-latency network.',
    answer:
      'Focus on the three-way handshake, congestion control (like TCP Fast Open, and CUBIC), and optimizing for reduced latency.',
    category: 'Networking',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '162',
    question: 'Design and implement a concurrent hash map.',
    answer:
      'Implement with fine-grained locking or lock-free techniques to ensure thread safety and high concurrency.',
    category: 'Data Structures',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '163',
    question: 'Find the Kth largest element in a stream of numbers.',
    answer:
      'Utilize a min-heap to keep track of the K largest elements, ensuring efficient insertion and extraction.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '164',
    question: "Implement Google's PageRank algorithm.",
    answer:
      'Use graph-based algorithms focusing on eigenvector calculation and iterative approaches.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '165',
    question: 'Design an API rate limiter for a web service.',
    answer:
      'Use token bucket or leaky bucket algorithms, consider distributed storage for scalability.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '166',
    question: 'Optimize database queries for a high-traffic website.',
    answer:
      'Focus on indexing, query optimization, using caching, database sharding, and efficient schema design.',
    category: 'Database Systems',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '167',
    question:
      'Create a secure and scalable authentication system for a web application.',
    answer:
      'Implement OAuth for third-party integrations, use JWT for stateless authentication, and ensure protection against common security vulnerabilities.',
    category: 'Security',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '168',
    question:
      'Design a system for efficient storage and retrieval of large-scale time-series data.',
    answer:
      'Optimize for write-heavy loads, use time-based partitioning, efficient indexing, and consider data compression techniques.',
    category: 'Database Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '169',
    question: 'Explain how a blockchain works and how to implement one.',
    answer:
      'Focus on cryptographic hashing, decentralized consensus algorithms (like Proof of Work), and the maintenance of a distributed ledger.',
    category: 'Distributed Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '170',
    question: 'Design an efficient parking lot management system.',
    answer:
      'Use object-oriented design principles, focus on efficiently handling different vehicle sizes, and optimizing space usage.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '171',
    question: 'Develop a machine learning model to predict stock prices.',
    answer:
      'Consider time series analysis, regression models, and reinforcement learning; pay attention to features and data preprocessing.',
    category: 'Machine Learning',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '172',
    question: 'Write a custom memory allocator for a C++ application.',
    answer:
      'Discuss memory pool allocation, handling fragmentation, and optimizing for allocation/deallocation speed.',
    category: 'Low-level Systems',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '173',
    question: 'Design a real-time multiplayer online game architecture.',
    answer:
      'Focus on handling high network traffic, efficient state synchronization, latency reduction, and scalability.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '174',
    question: 'Implement a distributed file system.',
    answer:
      'Address challenges in data distribution, replication, fault tolerance, consistency, and performance.',
    category: 'Distributed Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '175',
    question:
      'Optimize a search algorithm for a large dataset in a distributed environment.',
    answer:
      'Implement distributed searching algorithms like MapReduce for scalability and efficiency.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '176',
    question: 'Design a data pipeline for processing big data in real-time.',
    answer:
      'Utilize stream processing frameworks (like Apache Kafka, Spark Streaming), ensure fault tolerance, and manage backpressure.',
    category: 'Data Engineering',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '177',
    question:
      'Build a high-frequency trading system and discuss its components.',
    answer:
      'Focus on low latency, high throughput, reliable data feeds, order execution systems, and concurrent algorithms.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '178',
    question:
      'Develop a deep learning model to analyze and interpret medical images.',
    answer:
      'Use convolutional neural networks, pay attention to dataset quality and preprocessing, and handle class imbalances.',
    category: 'Machine Learning',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '179',
    question:
      'Create an AI that can play a complex board game at a competitive level.',
    answer:
      'Implement advanced AI techniques like Monte Carlo Tree Search, deep learning, and reinforcement learning.',
    category: 'Artificial Intelligence',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '180',
    question: 'Design a fraud detection system for online transactions.',
    answer:
      'Use machine learning for anomaly detection, implement rule-based systems for known fraud patterns, ensure real-time processing.',
    category: 'Security',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '181',
    question: 'Implement a distributed graph processing framework.',
    answer:
      'Discuss vertex-centric computation, message passing between nodes, and optimizations for large-scale processing.',
    category: 'Distributed Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '182',
    question: 'Design a global video streaming service like Netflix.',
    answer:
      'Focus on CDN usage, adaptive bitrate streaming, content caching strategies, and handling peak traffic loads.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '183',
    question:
      'Create a system to efficiently match job seekers with job postings.',
    answer:
      'Use NLP for parsing resumes, implement ranking algorithms, and optimize for search and matching efficiency.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '184',
    question: 'Design and implement a large-scale distributed cache system.',
    answer:
      'Consider consistency, data partitioning, eviction policies, and fault tolerance in distributed caching.',
    category: 'Distributed Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '185',
    question:
      'Optimize network protocols for a satellite communication system.',
    answer:
      'Address latency, data loss, and bandwidth issues; optimize for long-distance and high-latency networks.',
    category: 'Networking',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '186',
    question: "Develop an autonomous vehicle's path planning algorithm.",
    answer:
      'Implement algorithms considering real-time obstacle avoidance, dynamic path adjustments, and efficient routing.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '187',
    question:
      'Design a scalable and reliable messaging system for a large corporation.',
    answer:
      'Utilize message queues (like Kafka, RabbitMQ), ensure fault tolerance, and implement load balancing.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '188',
    question:
      'Implement a natural language processing algorithm to understand and answer user queries.',
    answer:
      'Use NLP techniques like tokenization, parsing, and deep learning models for understanding and generating responses.',
    category: 'Machine Learning',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '189',
    question:
      'Create an efficient algorithm for real-time anomaly detection in network traffic.',
    answer:
      'Implement statistical models or machine learning algorithms to detect unusual patterns indicative of anomalies.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '190',
    question:
      'Design a system to manage and process Internet of Things (IoT) data.',
    answer:
      'Focus on handling large-scale data influx, real-time processing, data storage, and analytics.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '191',
    question: 'Build a compiler for a new programming language.',
    answer:
      'Discuss lexical analysis, parsing, syntax tree generation, semantic analysis, and code generation.',
    category: 'Low-level Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '192',
    question:
      'Implement a robust text editor with features like auto-complete and syntax highlighting.',
    answer:
      'Consider efficient data structures for text storage (like gap buffers), and algorithms for syntax parsing.',
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '193',
    question:
      'Design a scalable infrastructure for an online advertising platform.',
    answer:
      'Focus on handling high-volume traffic, data analytics, ad targeting algorithms, and ensuring low-latency responses.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '194',
    question:
      'Develop a machine learning algorithm to detect fake news on social media.',
    answer:
      'Use NLP for text analysis, implement classification algorithms, and consider the challenge of unstructured data.',
    category: 'Machine Learning',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '195',
    question:
      'Optimize an SQL database for a high-volume financial transaction system.',
    answer:
      'Focus on transaction isolation levels, indexing strategies, query optimization, and database sharding.',
    category: 'Database Systems',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '196',
    question: 'Design a cloud-based virtual desktop infrastructure.',
    answer:
      'Address virtualization technologies, resource allocation, security, and remote access protocols.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '197',
    question: 'Create a real-time sports analytics system using sensor data.',
    answer:
      'Utilize streaming data processing, machine learning for pattern recognition, and efficient data storage solutions.',
    category: 'Data Engineering',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '198',
    question:
      'Implement a quantum algorithm for solving a well-known computational problem.',
    answer:
      "Discuss quantum computing principles, qubit manipulation, and specific algorithms like Grover's or Shor's algorithm.",
    category: 'Algorithms',
    difficulty: 'Hard',
    completed: true,
  },
  {
    question_number: '199',
    question: 'Design a secure mobile payment system for developing countries.',
    answer:
      'Focus on security protocols, offline capabilities, user authentication, and low-resource optimizations.',
    category: 'Security',
    difficulty: 'Hard',
    completed: false,
  },
  {
    question_number: '200',
    question:
      'Build a scalable image processing pipeline for a photo-sharing app.',
    answer:
      'Implement distributed processing, efficient storage, and consider ML techniques for feature extraction.',
    category: 'System Design',
    difficulty: 'Hard',
    completed: false,
  },
];

const categories = [
  'General Programming',
  'General Program',
  'Data Structures',
  'Languages and Frameworks',
  'Database and SQL',
  'Web Development',
  'Software Testing',
  'Version Control',
  'System Design',
  'Security',
  'DevOps',
  'Front-end',
  'Back-end',
  'Full-stack',
  'Algorithms',
  'Machine Learning',
  'Distributed Systems',
  'Networking',
  'Low-level Systems',
  'Database Systems',
  'Data Engineering',
  'Artificial Intelligence',
];

export default function QuestionsPage() {
  const [difficulty, setDifficulty] = useState('all');
  const [category, setCategory] = useState('all');

  // Filter questions based on selected difficulty and category
  const filteredQuestions = questionsData.filter(
    (q) =>
      (difficulty === 'all' || q.difficulty === difficulty) &&
      (category === 'all' || q.category === category)
  );

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' href='/dashboard'>
          <Brain className='h-6 w-6' />
          <span className='ml-2 text-2xl font-bold'>AI Interview Prep</span>
        </Link>
        <nav className='ml-auto flex items-center gap-4 sm:gap-6'>
          <Button variant='ghost' asChild>
            <Link href='/practice'>Practice</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href='/leaderboard'>Leaderboard</Link>
          </Button>
        </nav>
      </header>
      <main className='flex-1 py-12 px-4 md:px-6 lg:px-8'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Interview Questions</CardTitle>
            <CardDescription>
              Browse and practice interview questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex justify-between items-center mb-6'>
              <Select onValueChange={setDifficulty} defaultValue={difficulty}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select difficulty' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Difficulties</SelectItem>
                  <SelectItem value='Easy'>Easy</SelectItem>
                  <SelectItem value='Medium'>Medium</SelectItem>
                  <SelectItem value='Hard'>Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setCategory} defaultValue={category}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All Categories</SelectItem>
                  {categories.map((current, index) => (
                    <SelectItem key={index} value={current}>
                      {current}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[50px]'>#</TableHead>
                  <TableHead className='w-[50px]'>Status</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className='text-right'>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question, index) => (
                  <TableRow key={question.question_number}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {question.completed ? (
                        <CheckCircle className='text-green-500' />
                      ) : (
                        <CircleHelp className='text-yellow-500' />
                      )}
                    </TableCell>
                    <TableCell className='font-medium'>
                      {question.question}
                    </TableCell>
                    <TableCell>{question.difficulty}</TableCell>
                    <TableCell>{question.category}</TableCell>
                    <TableCell className='text-right'>
                      <Button variant='outline' asChild>
                        <Link href={`/questions/${question.question_number}`}>
                          Attempt
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
