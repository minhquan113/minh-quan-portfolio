import { Project, Skill, NavItem } from './types';
import { Database, TrendingUp, Users, PieChart } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    category: "Data & Business Analytics",
    items: ["Python", "Pandas", "NumPy", "SQL Basics", "ETL Pipelines", "Data Cleaning"]
  },
  {
    category: "Business Intelligence & Decision Support",
    items: ["Power BI", "DAX", "Tableau", "Excel (VBA)", "Dashboarding", "Data Storytelling"]
  },
  {
    category: "Business Strategy & Commercial Insights",
    items: ["Customer Segmentation", "Market Research", "Operations Analytics", "KPI Monitoring", "Customer Service", "Sales Funnel Analytics"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'ETL PIPELINE (Ad-hoc task)',
    category: 'DA + BA skill',
    description: 'Built a Python-based ETL workflow to validate and reconcile daily inventory between WMS and OMS. Automated data cleaning, barcode matching, and aging checks to identify missing, duplicated, or slow-moving SKUs, improving stock accuracy for e-commerce operations.',
    tags: ['PYTHON / ETL / DATA QUALITY / INVENTORY ANALYTICS'],
    image: 'https://centralretail.com.vn/wp-content/uploads/2025/03/CBS_Logo_Full-Logo-Red-Black-e1742527564792.png',
    links: [
  
      { label: 'Read Report', url: 'https://short-curtain-d49.notion.site/CRV-ETL-PIPELINE-Ad-hoc-task-2b681f5724b180be972fd719b9ff9e7c?pvs=74', type: 'doc' }
    ]
  },
  {
    id: 'p2',
    title: 'TechCoop B2B Receivables Analytics and Project Management (Excel + VBA + Power Query + Excel Dashboard)',
    category: 'Business Intelligence',
    description: 'In this project, I was responsible for designing the complete data processing and analytical dashboard for TechCoop’s B2B receivables portfolio. The core objective was to transform fragmented operational spreadsheets into a structured analytics model that directly supported sales decision-making and credit-risk control.',
    tags: ['Market Research', 'Survey Design', 'Statistical Analysis', 'Power BI'],
    image: 'https://substackcdn.com/image/fetch/$s_!IvoN!,w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a3c105d-ac35-4479-a069-19e33ef922c6_940x788.png',
    links: [
      { label: 'View Project', url: 'https://short-curtain-d49.notion.site/TechCoop-B2B-Receivables-Analytics-and-Project-Management-Power-Query-Excel-Dashboard-2b681f5724b180b69debf82c01121e90?source=copy_link', type: 'doc' }
    ]
  },
  {
    id: 'p3',
    title: 'FITFLOP MKP Operation Report (Central Group)',
    category: 'Reporting Skill',
    description: 'Independently handled FitFlop’s e-commerce reporting after Central Retail’s takeover in June 2025. Within two months, SOT improved to 95–100% across platforms, non-fulfillment dropped sharply (Lazada 10% → 1.8%), and store ratings stabilized at 4.9 stars. A challenging but high-impact operational transformation.',
    tags: ['Advanced Excel', 'Power Point', 'Data Visualization', 'Sales Ops', 'SLA Monitoring', 'Customer Experience Metrics'],
    image: 'https://gigamall.com.vn/data/2019/05/06/15400917_logo-fotflop-500x500.jpg',
    links: [
      { label: 'View Report', url: 'https://drive.google.com/file/d/1zq7zGts59akW3VRGkNx0MoEoKqVlDHx_/view?usp=sharing', type: 'external' }
    ]
  },
  {
    id: 'p4',
    title: 'TechCoop - Business Classifications',
    category: 'Customer Classification',
    description: 'Collaborated with Account Managers to structure a new ecosystem data framework for TechCoop. Based on raw operational data collected by AMs and TechCoop’s scoring requirements, I independently developed the classification logic, set business thresholds, and built an automated scoring sheet that evaluates each enterprise objectively. The tool streamlined AM workflows, standardized customer assessment, and reduced manual scoring time.',
    tags: [ 'Excel Automation',
  'Data Cleaning',
  'Scoring Model',
  'Business Rules Design',
  'Customer Classification',
  'Workflow Optimization',
  'Stakeholder Collaboration'],
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEr6SFcdhZfpg/feedshare-shrink_800/B56ZjplaapHUAk-/0/1756265570990?e=2147483647&v=beta&t=zk0t0V9Std0egz3eOB6pMKi5xoSeEZdWU6GLhzF68SE',
    links: [
      { label: 'View Summary Sheet', url: 'https://docs.google.com/spreadsheets/d/19SlSu-nVXNAPBxJ-bBV3-CGiRsJINYRP3_JRFri8W7Q/edit?gid=752174177#gid=752174177', type: 'external' }
    ]
  },
  {
    id: 'p5',
    title: 'B2B Bi-Weekly KPI Performance Report',
    category: 'Business-facing reporting',
    description: 'Developed a structured bi-weekly performance report for the B2B division, integrating sales KPIs, customer activity, revenue tracking, and qualitative feedback. I designed the evaluation logic (KPI vs actual), automated conditional results (Đạt / Chưa đạt / Vượt), and standardized the reporting framework for all Account Managers. This improved data consistency, reduced manual time, and provided management with a clear snapshot of departmental performance',
    tags: ['Excel Automation',
  'KPI Tracking',
  'Sales Ops',
  'Performance Reporting',
  'Business Analytics',
  'Workflow Standardization'],
    image: 'https://techcoop.vn/wp-content/uploads/2022/11/TechCoop-Logo.png',
    links: [
      { label: 'View Reporting Sheet', url: 'https://docs.google.com/spreadsheets/d/1nqfVAPXcyDZ8aAEjuqiFunnr75jMOoSAzorbDvc_BaY/edit?gid=0#gid=0', type: 'external' }
    ]
  },
  {
    id: 'p6',
    title: 'Freelance Projects/Works',
    category: 'Marketing Metrics/Operations/Systems',
    description: 'Delivered short-term analytical and operational support for small businesses, with a focus on process structuring, data consistency, and decision-oriented reporting. The work involved analyzing logistics planning and operational documentation, as well as building sales and margin tracking frameworks to improve visibility into business performance. These projects emphasized practicality, fast turnaround, and alignment with real operational needs rather than theoretical modeling.',
    tags: ['Media Analytics',
  'Digital Marketing',
  'Logistics',
  'Data Cleaning',
  'Cross-Platform Analysis',
  'Insight Generation',
  'CPM/CPV/CPE Benchmarking',
  'Campaign Optimization'],
    image: 'https://i.ibb.co/QjDhHZ7F/BTA.jpg',
    links: [
      { label: 'Insights View', url: 'https://short-curtain-d49.notion.site/Freelance-Projects-Works-2c381f5724b18086a1c0f5d827bd1bf6?source=copy_link', type: 'doc' }
    ]
  },
  {
    id: 'p7',
    title: 'T&T Sport – Student Management System & Attendance Automation',
    category: 'Database designing and automation',
    description: 'Designed a complete student–class management system for T&T Sport using Airtable and Google Sheets. Built a structured database for students, classes, and coaches, created a streamlined attendance sheet for daily operations, and automated data sync between Sheets and Airtable using Make.com.',
    tags: ['Airtable',
  'Google Sheets',
  'Make.com Automation',
  'Database Design',
  'No-Code Development',
  'Workflow Automation',
  'Operations Analytics',
  'Process Optimization'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_RUYQVMHD6wpWnRUHVesqXXb_M0k0T1zJw&s',
    links: [
      { label: 'View Projects', url: 'https://docs.google.com/document/d/17ja0gXF2E23XH9trAMHREj-hNktdVQhrGKijwT6XUd8/edit?tab=t.0', type: 'doc' }
    ]
  },
  
  {
    id: 'p8',
    title: 'Exam Grading Analytics Pipeline/Marker Performance & Workflow Optimization for Prep IELTS (Outsourcing) ',
    category: 'Data Analytics',
    description: 'I collaborated with an Operations Executive at Prep IELTS to design a complete grading performance analytics framework. I analyzed the business issues around slow turnaround time, deadline violations, and inconsistent productivity among markers. I designed a full metric system, data model, and Airflow-ready SQL modules to support automated monitoring of marker performance. This included productivity ranking, grading speed analysis, overdue detection, and course-level marking volume. The project strengthened operational visibility and enabled the team to optimize resource allocation, reduce delays, and track performance accurately.',
    tags: ['SQL', 'ETL', 'Airflow-ready Queries', 'Education Analytics', 'Grading System Analytics'],
    image: 'https://static-assets.prepcdn.com/content-management-system/Nen_Tang_Hoc_and_Luyen_Thi_Thong_Minh_abf5a1e863.png',
    links: [
      { label: 'View Code', url: 'https://short-curtain-d49.notion.site/Prep-Ielts-Exam-Grading-Analytics-Pipeline-Outsourcing-2bd81f5724b18004aa94da0a858c2a38?source=copy_link', type: 'external' }
    ]
  }
];

export const HERO_STATS = [
  { label: 'Analytics & BI Projects Delivered', value: '10+', icon: Database },
  { label: 'Data Points Processed & Analyzed', value: '3M+', icon: TrendingUp },
  { label: 'Business Impact', value: 'Enabled data-driven sales & revenue optimization', icon: Users },
  { label: 'Dashboards & Automated Reports', value: '10+', icon: PieChart },
];
