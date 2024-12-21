import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [SplitterModule, ButtonModule, TimelineModule, CardModule],
    templateUrl: './courses.component.html',
    styleUrls: ['./courses-component.css'],
})
export class CoursesComponent implements OnInit{
    @ViewChild('contentDiv1') contentDiv1!: ElementRef;
    isOpen1: boolean = false;
    toggleDiv1() {
        const element = this.contentDiv1.nativeElement;
        if (this.isOpen1) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen1 = !this.isOpen1;
    }

    @ViewChild('contentDiv2') contentDiv2!: ElementRef;
    isOpen2: boolean = false;
    toggleDiv2() {
        const element = this.contentDiv2.nativeElement;
        if (this.isOpen2) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen2 = !this.isOpen2;
    }

    @ViewChild('contentDiv3') contentDiv3!: ElementRef;
    isOpen3: boolean = false;
    toggleDiv3() {
        const element = this.contentDiv3.nativeElement;
        if (this.isOpen3) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen3 = !this.isOpen3;
    }

    @ViewChild('contentDiv4') contentDiv4!: ElementRef;
    isOpen4: boolean = false;
    toggleDiv4() {
        const element = this.contentDiv4.nativeElement;
        if (this.isOpen4) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen4 = !this.isOpen4;
    }

    @ViewChild('contentDiv5') contentDiv5!: ElementRef;
    isOpen5: boolean = false;
    toggleDiv5() {
        const element = this.contentDiv5.nativeElement;
        if (this.isOpen5) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen5 = !this.isOpen5;
    }

    @ViewChild('contentDiv6') contentDiv6!: ElementRef;
    isOpen6: boolean = false;
    toggleDiv6() {
        const element = this.contentDiv6.nativeElement;
        if (this.isOpen6) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen6 = !this.isOpen6;
    }

    @ViewChild('contentDiv7') contentDiv7!: ElementRef;
    isOpen7: boolean = false;
    toggleDiv7() {
        const element = this.contentDiv7.nativeElement;
        if (this.isOpen7) {
            element.style.height = '0';
        } else {
            element.style.height = `${element.scrollHeight}px`;
        }
        this.isOpen7 = !this.isOpen6;
    }
    // events: EventItem[];

    // constructor() {
    //     this.events = [
    //         { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    //         { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    //         { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    //         { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    //     ];
    // }
    events: any[] = [
        {
            heading: 'MS Word',
            icon: 'MS<br>Word',
            color: '#2679d6',
            content:
                "At Symphony Institute, we take pride in offering top-notch training in Microsoft Word, the world'sleading word processing software. Our comprehensive course is designed to equip students and professionals with the skills they need to excel in creating polished documents, reports, resumes, and more. With a focus on practical learning, our expert instructors guide you through essential features like advanced formatting, templates, tables, styles, and collaboration tools. Whether you're a beginner or looking to enhance your existing skills, Symphony ensures you master the art of efficient and professional document creation.",
            sideHeading:
                'Unlock the Power of Microsoft Word at Symphony Institute',
        },
        {
            heading: 'MS Excel',
            icon: 'MS<br>Excel',
            color: '#2679d6',
            content: `At Symphony Institute, we provide unparalleled training in Microsoft Excel, the ultimate tool for data management, analysis, and visualization. Our expertly crafted course is tailored to help students and professionals unlock the full potential of Excel, from basic operations to advanced functionalities.

Whether you're an aspiring analyst, a business professional, or simply looking to enhance your productivity, Symphony Institute's Microsoft Excel training will empower you to turn data into actionable insights. Join us today and take a leap toward a more productive and successful future!`,
            sideHeading: 'Master Microsoft Excel at Symphony Institute',
        },
        {
            heading: 'Power Point',
            icon: 'Power<br>Point',
            color: '#2679d6',
            content: `At Symphony Institute, we offer expert training in Microsoft PowerPoint, empowering you to create professional and visually engaging presentations. From slide design and animations to multimedia integration and transitions, our course covers everything you need to craft impactful presentations for business, academics, or personal projects.

With hands-on training from experienced instructors, you’ll gain the skills to design slides that communicate your ideas clearly and leave a lasting impression. Whether you’re a beginner or want to enhance your existing skills, Symphony Institute is the perfect place to master PowerPoint and elevate your presentation game!`,
            sideHeading: `Create Impactful Presentations with Microsoft PowerPoint at Symphony Institute`,
        },
        {
            heading: 'Outlook',
            icon: 'Outlook',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in Microsoft Outlook, the essential tool for managing emails, calendars, tasks, and contacts efficiently. Our course is designed to help you master Outlook's powerful features, including email organization, scheduling meetings, setting reminders, and creating to-do lists.

With practical, hands-on training from experienced instructors, you’ll learn how to streamline communication and boost productivity. Whether you’re a professional looking to stay organized or a student aiming to manage your time better, Symphony Institute will help you unlock the full potential of Microsoft Outlook!`,
            sideHeading: `Master Microsoft Outlook at Symphony Institute`,
        },
    ];

    sideHeading: string = this.events[0].sideHeading;
    Heading: string = this.events[0].heading;
    dynamicContent: string = this.events[0].content;
    // Variable to track the selected icon
    selectedIcon: string | null = this.events[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon = icon; // Set the selected icon
        this.dynamicContent = content;
        this.sideHeading = sideHeading;
        this.Heading = heading;
    }

    events2: any[] = [
        {
            heading: 'Hyper Text Markup Language',
            icon: 'HTML',
            color: '#2679d6',
            content: `At Symphony Institute, we offer comprehensive training in HTML (HyperText Markup Language), the backbone of web development. Our course is designed to teach you how to structure and create modern, responsive websites by mastering HTML's essential tags, attributes, and semantics.

With hands-on guidance from experienced instructors, you'll gain practical skills to build webpages from scratch, laying the foundation for a successful career in web development. Whether you're a beginner or aspiring developer, Symphony Institute is your gateway to mastering HTML and starting your journey in the tech world!






`,
            sideHeading: 'Learn HTML at Symphony Institute',
        },
        {
            heading: 'Cascading Style Sheets',
            icon: 'CSS',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in CSS (Cascading Style Sheets), the key to designing visually stunning and responsive websites. Our course covers everything from basic styling techniques to advanced layouts, animations, and modern design frameworks.

With hands-on practice and guidance from experienced instructors, you'll learn how to transform plain HTML into beautiful, user-friendly web pages. Whether you're starting out or looking to enhance your web development skills, Symphony Institute is the perfect place to master CSS and bring your creative visions to life!`,
            sideHeading: 'Master CSS at Symphony Institute',
        },
        {
            heading: 'Bootstrap',
            icon: 'BS',
            color: '#2679d6',
            content: `At Symphony Institute, we offer professional training in Bootstrap, the world’s most popular front-end framework for building responsive and mobile-first websites. Our course covers everything from grid systems and utility classes to components like navigation bars, modals, and carousels.

With hands-on guidance from experienced instructors, you’ll learn to create modern, visually appealing, and fully responsive web designs quickly and efficiently. Whether you’re a beginner or an aspiring web developer, Symphony Institute is your gateway to mastering Bootstrap and taking your web development skills to the next level!`,
            sideHeading: `Learn Bootstrap at Symphony Institute`,
        },
        {
            heading: 'JavaScript',
            icon: 'JS',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in JavaScript, the powerful programming language that brings interactivity and functionality to websites. Our course covers everything from basic syntax and DOM manipulation to advanced concepts like asynchronous programming and APIs.

With practical, hands-on training from experienced instructors, you’ll learn to create dynamic, user-friendly web applications and enhance your coding skills. Whether you’re a beginner or an aspiring developer, Symphony Institute is the perfect place to master JavaScript and unlock endless possibilities in web development!`,
            sideHeading: `Master JavaScript at Symphony Institute`,
        },
    ];

    sideHeading2: string = this.events2[0].sideHeading;
    Heading2: string = this.events2[0].heading;
    dynamicContent2: string = this.events2[0].content;
    // Variable to track the selected icon
    selectedIcon2: string | null = this.events2[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent2(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon2 = icon; // Set the selected icon
        this.dynamicContent2 = content;
        this.sideHeading2 = sideHeading;
        this.Heading2 = heading;
    }

    events3: any[] = [
        {
            heading: 'JAVA',
            icon: 'JAVA',
            color: '#2679d6',
            content: `At Symphony Institute, we offer professional training in Java, one of the most versatile and widely-used programming languages in the world. Our course covers everything from basic syntax and object-oriented programming to advanced topics like multithreading, file handling, and database connectivity.

With hands-on guidance from experienced instructors, you’ll gain the skills to build robust applications, from desktop to enterprise-level software. Whether you’re starting your coding journey or aiming to enhance your programming expertise, Symphony Institute is your gateway to mastering Java and advancing your tech career!`,
            sideHeading: `Master Java Programming at Symphony Institute`,
        },
        {
            heading: 'Python',
            icon: 'Python',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in Python, a powerful and versatile programming language renowned for its simplicity and wide range of applications. Our course covers everything from basic syntax and data structures to advanced topics like web development, data analysis, and machine learning.

With hands-on practice and guidance from experienced instructors, you’ll learn to build efficient programs and solve real-world problems. Whether you’re a beginner or looking to advance your skills, Symphony Institute is the perfect place to master Python and unlock endless opportunities in the tech world!`,
            sideHeading: `Master Python Programming at Symphony Institute`,
        },
        {
            heading: 'Spring Boot',
            icon: 'SB',
            color: '#2679d6',
            content: `At Symphony Institute, we offer professional training in Spring Boot, a powerful framework for building robust and scalable Java-based applications. Our course covers everything from creating RESTful APIs and configuring databases to implementing security and deploying applications seamlessly.

With hands-on guidance from experienced instructors, you’ll learn to simplify and accelerate your Java development process using Spring Boot’s advanced features. Whether you’re a beginner in frameworks or an experienced developer, Symphony Institute is the ideal place to master Spring Boot and take your backend development skills to the next level!`,
            sideHeading: `Master Spring Boot at Symphony Institute`,
        },
        {
            heading: 'SQL Server',
            icon: 'SQL',
            color: '#2679d6',
            content: `At Symphony Institute, we provide comprehensive training in SQL Server, a leading database management system used by organizations worldwide. Our course covers everything from database design and query writing to advanced concepts like stored procedures, triggers, and performance optimization.

With hands-on guidance from experienced instructors, you’ll learn to manage, analyze, and secure data efficiently. Whether you’re a beginner or looking to enhance your database skills, Symphony Institute is the perfect place to master SQL Server and advance your career in data management and analysis!`,
            sideHeading: `Master SQL Server at Symphony Institute`,
        },
    ];

    sideHeading3: string = this.events3[0].sideHeading;
    Heading3: string = this.events3[0].heading;
    dynamicContent3: string = this.events3[0].content;
    // Variable to track the selected icon
    selectedIcon3: string | null = this.events3[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent3(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon3 = icon; // Set the selected icon
        this.dynamicContent3 = content;
        this.sideHeading3 = sideHeading;
        this.Heading3 = heading;
    }

    events4: any[] = [
        {
            heading: 'Flutter',
            icon: 'Flutter',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in Flutter, Google’s powerful framework for building cross-platform mobile applications. Our course covers everything from designing beautiful UIs to creating fully functional apps that work seamlessly on both Android and iOS.

With hands-on guidance from experienced instructors, you’ll learn the fundamentals of Dart programming, state management, API integration, and deploying apps to app stores. Whether you’re a beginner or an aspiring developer, Symphony Institute is your gateway to mastering Flutter and launching your career in mobile app development!`,
            sideHeading: 'Learn Flutter at Symphony Institute',
        },
        {
            heading: 'Android Studio',
            icon: 'AS',
            color: '#2679d6',
            content: `At Symphony Institute, we offer professional training in Android Studio, the official development environment for creating powerful Android applications. Our course covers everything from designing intuitive UIs and coding in Kotlin/Java to debugging and deploying apps on the Google Play Store.

With hands-on practice and expert guidance, you’ll learn to build feature-rich, responsive Android apps and gain proficiency in tools like Gradle, Emulator, and Logcat. Whether you’re starting as a beginner or enhancing your Android skills, Symphony Institute is the perfect place to master Android Studio and excel in mobile app development!`,
            sideHeading: 'Master Android Studio at Symphony Institute',
        },
        {
            heading: 'Swift',
            icon: 'Swift',
            color: '#2679d6',
            content: `At Symphony Institute, we provide expert training in Swift, Apple’s powerful programming language for building iOS, macOS, watchOS, and tvOS applications. Our course covers the fundamentals of Swift, including syntax, control flow, and object-oriented programming, along with advanced topics like app lifecycle management and SwiftUI for user interface design.

With hands-on guidance from experienced instructors, you’ll learn to create high-performance, feature-rich applications for Apple platforms. Whether you’re a beginner or an aspiring iOS developer, Symphony Institute is your gateway to mastering Swift and launching a successful career in app development!`,
            sideHeading: `Learn Swift Programming at Symphony Institute`,
        },
        {
            heading: 'Django',
            icon: 'Django',
            color: '#2679d6',
            content: `At Symphony Institute, we offer professional training in Django, a powerful Python-based web framework for building secure, scalable, and dynamic web applications. Our course covers everything from setting up Django projects and creating models to building RESTful APIs and deploying applications.

With hands-on guidance from experienced instructors, you’ll learn to design robust backends, manage databases, and integrate frontend frameworks seamlessly. Whether you’re a beginner or looking to advance your web development skills, Symphony Institute is the perfect place to master Django and excel in backend development!`,
            sideHeading: `Master Django at Symphony Institute`,
        },
    ];

    sideHeading4: string = this.events4[0].sideHeading;
    Heading4: string = this.events4[0].heading;
    dynamicContent4: string = this.events4[0].content;
    // Variable to track the selected icon
    selectedIcon4: string | null = this.events4[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent4(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon4 = icon; // Set the selected icon
        this.dynamicContent4 = content;
        this.sideHeading4 = sideHeading;
        this.Heading4 = heading;
    }
    events5: any[] = [
        {
            heading: 'Mongo DB',
            icon: 'M',
            color: '#2679d6',
            content: `At Symphony Institute, we offer a comprehensive MongoDB course designed to equip students with essential skills for managing modern, scalable databases. MongoDB, a popular NoSQL database, allows for flexible and efficient data handling in web and mobile applications.

In this course, students will learn:<br>

-> Database Design and schema optimization.<br>
-> CRUD Operations for data manipulation.<br>
-> Aggregation Framework for complex queries.<br>
-> Indexing to speed up data retrieval.<br>
-> Replication and Sharding for high availability and scalability.<br>
Through practical projects and expert guidance, students will develop the skills needed to work with MongoDB in real-world scenarios. This course is perfect for developers and tech enthusiasts aiming to master modern database management.`,
            sideHeading: 'MongoDB: Master NoSQL Database Management',
        },
        {
            heading: 'Express JS',
            icon: 'E',
            color: '#2679d6',
            content: `At Symphony Institute, we offer an in-depth Express.js course that teaches students how to build scalable and efficient web applications. Express.js is a lightweight and fast framework for Node.js, widely used for developing APIs and server-side applications.

In this course, students will learn:<br>

-> Routing to manage application URLs and HTTP methods.<br>
-> Middleware to handle requests, responses, and errors.<br>
-> Authentication and session management for secure web apps.<br>
-> API Development for creating RESTful services.<br>
-> Template Engines to render dynamic views in web applications.<br>
By the end of the course, students will gain hands-on experience in developing web applications using Express.js, preparing them for real-world development projects.`,
            sideHeading: 'Express.js: Building Scalable Web Applications',
        },
        {
            heading: 'React',
            icon: 'R',
            color: '#2679d6',
            content: `At Symphony Institute, our React course equips students with the skills to create modern, dynamic web applications using one of the most popular JavaScript libraries. React enables the development of interactive user interfaces, making it an essential tool for frontend developers.

In this course, students will learn:<br>

-> Component-based architecture to build reusable UI components.<br>
-> State management for handling dynamic data in applications.<br>
-> React Router for creating single-page applications with navigation.<br>
-> Hooks for managing state and side effects in functional components.<br>
-> Integration with RESTful APIs and backend services.<br>
By the end of the course, students will have the skills to build sophisticated, responsive web applications using React, preparing them for a career in frontend development.`,
            sideHeading: `React: Building Dynamic User Interfaces`,
        },
        {
            heading: 'Node JS',
            icon: 'N',
            color: '#2679d6',
            content: `At Symphony Institute, our Node.js course offers comprehensive training on building scalable and efficient server-side applications using JavaScript. Node.js is widely used for developing fast and lightweight back-end services, making it an essential skill for modern web developers.

In this course, students will learn:<br>

-> Building RESTful APIs to handle HTTP requests and responses.<br>
-> Working with databases (MongoDB, SQL) for data storage and management.<br>
-> Asynchronous programming using callbacks, promises, and async/await.<br>
-> Using Node.js frameworks like Express.js for routing and middleware.<br>
-> File system operations, authentication, and security best practices.<br>
By the end of the course, students will be able to create full-stack applications and backend services with Node.js, setting them up for success in the backend development field.`,
            sideHeading: `Node.js: Server-Side JavaScript Development`,
        },
    ];

    sideHeading5: string = this.events5[0].sideHeading;
    Heading5: string = this.events5[0].heading;
    dynamicContent5: string = this.events5[0].content;
    // Variable to track the selected icon
    selectedIcon5: string | null = this.events5[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent5(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon5 = icon; // Set the selected icon
        this.dynamicContent5 = content;
        this.sideHeading5 = sideHeading;
        this.Heading5 = heading;
    }
    events6: any[] = [
        {
            heading: 'English Language',
            icon: 'EL',
            color: '#2679d6',
            content: `At Symphony Institute, we offer a comprehensive English Language course designed to improve your communication skills for both personal and professional growth. Whether you're looking to enhance your writing, speaking, listening, or reading abilities, our course provides a solid foundation in all aspects of the English language.<br>

Our expert instructors focus on interactive learning methods, including practical exercises, group discussions, and immersive activities to boost fluency and confidence. We cover everything from grammar and vocabulary to pronunciation and business English, ensuring that you are well-prepared for real-world communication. Join us today to unlock new opportunities and elevate your language skills to the next level.`,
            sideHeading: 'English Language Course at Symphony Institute',
        },
        {
            heading: 'UI/UX Designing With Figma',
            icon: 'UI/UX',
            color: '#2679d6',
            content: `At Symphony Institute, we offer a specialized UI/UX Designing course using Figma, one of the most popular and powerful tools in the design industry today. This course is ideal for aspiring designers who want to master the art of creating user-centered, visually appealing, and functional digital experiences.<br>

Our hands-on training covers everything from wireframing and prototyping to designing responsive interfaces and conducting user testing. You'll learn how to use Figma's collaborative features to work efficiently with teams, enabling you to design, prototype, and iterate on user interfaces seamlessly. Whether you're aiming to design websites, mobile apps, or enterprise-level systems, this course equips you with the skills needed to create engaging and intuitive user experiences. Join us at Symphony Institute to build your design career with real-world tools and industry-best practices.`,
            sideHeading: 'UI/UX Designing with Figma at Symphony Institute',
        },
        {
            heading: 'Search Engine Optimization',
            icon: 'SEO',
            color: '#2679d6',
            content: `At Symphony Institute, we offer a comprehensive Search Engine Optimization (SEO) course designed to equip you with the skills needed to improve website visibility and drive organic traffic. In today’s competitive digital world, SEO is essential for businesses looking to succeed online, and this course prepares you to optimize websites for better rankings on search engines like Google.<br>

Our course covers everything from keyword research and on-page optimization to technical SEO and link-building strategies. You’ll learn how to analyze website performance, improve search engine rankings, and create content that attracts both users and search engines. With hands-on projects and real-world case studies, our SEO course provides practical skills that are highly sought after in the digital marketing industry. Join Symphony Institute to master SEO and boost your career in digital marketing.`,
            sideHeading: `Search Engine Optimization (SEO) at Symphony Institute`,
        },
        {
            heading: 'Digital Marketing',
            icon: 'DM',
            color: '#2679d6',
            content: `At Symphony Institute, we offer an in-depth Digital Marketing course that empowers students with the essential tools and strategies to succeed in the digital world. As businesses increasingly move online, the demand for skilled digital marketers continues to grow. Our course covers a wide range of topics including social media marketing, content marketing, email marketing, paid advertising, and analytics.<br>

Through hands-on training and real-world case studies, students will learn how to create effective digital marketing strategies, engage audiences, and drive measurable results. By the end of the course, you will be equipped to plan, execute, and optimize digital marketing campaigns that deliver tangible business outcomes. Join Symphony Institute to kickstart your career in the dynamic and fast-growing field of digital marketing.`,
            sideHeading: `Digital Marketing at Symphony Institute`,
        },
        {
            heading: 'Graphics Designing',
            icon: 'GD',
            color: '#2679d6',
            content: `At Symphony Institute, we offer a specialized Graphics Designing course that equips students with the creative skills and technical knowledge needed to thrive in the world of design. Whether you're interested in creating captivating visuals for print, web, or digital media, this course provides a strong foundation in design principles, typography, color theory, and software tools like Adobe Photoshop, Illustrator, and InDesign.<br>

Through hands-on projects and expert guidance, students will develop the ability to create stunning designs, enhance brand identity, and communicate ideas visually. By the end of the course, you'll have a comprehensive portfolio showcasing your work and be prepared to pursue a career in the fast-evolving field of graphic design. Join us at Symphony Institute to turn your creativity into a professional skill set!`,
            sideHeading: `Graphics Designing at Symphony Institute`,
        },
        {
            heading: 'Basic Programming',
            icon: 'BP',
            color: '#2679d6',
            content: `At Symphony Institute, our Basic Programming course is designed for individuals who are new to coding and want to build a strong foundation in programming logic and concepts. This course introduces students to fundamental programming languages such as Python, Java, and C++, with a focus on problem-solving, algorithm design, and software development principles.<br>

By the end of the course, students will gain hands-on experience in writing code, debugging programs, and understanding key programming constructs like loops, conditionals, and functions. This course will prepare you for further specialization in software development or other advanced fields, giving you the confidence to take on real-world programming challenges. Start your programming journey with Symphony Institute and unlock endless career opportunities in tech!`,
            sideHeading: `Basic Programming at Symphony Institute`,
        },
    ];

    sideHeading6: string = this.events6[0].sideHeading;
    Heading6: string = this.events6[0].heading;
    dynamicContent6: string = this.events6[0].content;
    // Variable to track the selected icon
    selectedIcon6: string | null = this.events6[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent6(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon6 = icon; // Set the selected icon
        this.dynamicContent6 = content;
        this.sideHeading6 = sideHeading;
        this.Heading6 = heading;
    }

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      // After component loads, scroll to the section
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    events7: any[] = [
        {
            heading: 'JAVA Lab',
            icon: 'J',
            color: '#2679d6',
            content: `At Symphony Institute, our Java Lab is designed to provide students with hands-on experience in Java programming, enabling them to build dynamic, scalable, and robust applications. Java is a widely-used programming language in web development, enterprise solutions, and mobile applications, making it an essential skill for aspiring developers.<br>

The lab covers core Java concepts such as object-oriented programming, file handling, exception handling, and multithreading, along with advanced topics like frameworks (Spring, Hibernate) and API integration. With real-world projects and practical exercises, students gain the confidence to solve complex programming challenges. Join our Java Lab to master coding skills and excel in the competitive field of software development.`,
            sideHeading: 'Java Lab at Symphony Institute',
        },
        {
            heading: 'SQL Lab',
            icon: 'S',
            color: '#2679d6',
            content: `At Symphony Institute, our SQL Lab offers practical training in database management and query optimization, essential for data-driven applications. SQL is the backbone of modern data handling, widely used in industries for managing and analyzing data effectively.<br>

The lab covers core SQL concepts like database design, creating and managing tables, writing advanced queries, and implementing stored procedures and triggers. Students also gain hands-on experience with tools like MySQL and SQL Server, learning to optimize database performance and handle real-world datasets. Join our SQL Lab to build strong database management skills and enhance your career in the IT and data analytics field.`,
            sideHeading: 'SQL Lab at Symphony Institute',
        },
        {
            heading: 'Azure Lab',
            icon: 'A',
            color: '#2679d6',
            content: `At Symphony Institute, our Azure Lab offers practical training in cloud computing, enabling students to build, deploy, and manage applications on the Microsoft Azure platform. Azure is a leading cloud service provider, widely used for enterprise solutions, data analytics, and application hosting.<br>

The lab covers essential Azure services like Virtual Machines, Azure Storage, SQL Databases, and Azure Functions, along with lessons on cloud security, automation, and cost management. Through hands-on projects, students learn to create scalable cloud solutions and integrate advanced services like AI and machine learning. Join our Azure Lab to gain expertise in cloud technology and boost your career in the evolving IT landscape.`,
            sideHeading: `Azure Lab at Symphony Institute`,
        },
        {
            heading: 'Python Lab',
            icon: 'P',
            color: '#2679d6',
            content: `At Symphony Institute, our Python Lab is designed to equip students with practical programming skills in Python, one of the most versatile and in-demand languages today. Python is widely used in web development, data analysis, machine learning, and automation.<br>

The lab covers essential concepts such as data structures, file handling, object-oriented programming, and popular libraries like Pandas, NumPy, and Matplotlib. Students also gain hands-on experience with real-world projects, including building web applications, automating tasks, and analyzing datasets. Join our Python Lab to master programming skills and advance your career in software development, data science, and AI.`,
            sideHeading: `Python Lab at Symphony Institute`,
        }
    ];

    sideHeading7: string = this.events7[0].sideHeading;
    Heading7: string = this.events7[0].heading;
    dynamicContent7: string = this.events7[0].content;
    // Variable to track the selected icon
    selectedIcon7: string | null = this.events7[0].icon;

    // Method to update the content and highlight the selected icon
    updateContent7(
        icon: string,
        content: string,
        sideHeading: string,
        heading: string
    ) {
        this.selectedIcon7 = icon; // Set the selected icon
        this.dynamicContent7 = content;
        this.sideHeading7 = sideHeading;
        this.Heading7 = heading;
    }

}
interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}
