// Data for portfolio - IT Operations Focus
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data - Your Real IT Projects
export const projects = [
  {
    priority: 1,
    title: 'Enterprise Nutanix Infrastructure',
    shortDescription:
      'Designed and deployed hyper-converged infrastructure cluster running Windows Domain Controllers, SQL clusters, Veeam backup systems, and critical business applications with high availability.',
    cover:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    type: 'Infrastructure 🏗️',
    siteAge: '18 months old',
  },
  {
    priority: 2,
    title: 'Microsoft 365 & Intune MDM Deployment',
    shortDescription:
      'Led enterprise-wide Microsoft 365 migration and implemented Intune MDM for device management, including Windows Update control, security policies, and compliance monitoring across 500+ endpoints.',
    cover:
      'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    visitors: '800+ Devices',
    type: 'Cloud & Identity ☁️',
  },
  {
    priority: 3,
    title: 'n8n Security Automation Framework',
    shortDescription:
      'Built automated workflow system for vulnerability reporting, incident response, and IT operations using n8n with Docker. Integrated Microsoft Defender, SharePoint, and email notifications.',
    cover:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    type: 'Automation 🤖',
    livePreview: '',
    githubLink: 'https://github.com/riyas22',
  },
  {
    priority: 4,
    title: 'Enterprise Security & Network Architecture',
    shortDescription:
      'Configured and manage comprehensive security infrastructure including Palo Alto firewall, CrowdStrike EDR, Proofpoint email security, nginx reverse proxy with SSL/TLS, and VPN access.',
    cover:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    type: 'Security 🔒',
    livePreview: '',
    siteAge: 'Ongoing',
  },
  {
    priority: 5,
    title: 'Multi-Platform Monitoring System',
    shortDescription:
      'Deployed Zabbix monitoring infrastructure for comprehensive system observability, along with OpenSearch 3.1.1 and Dashboards for log aggregation and analysis.',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    type: 'Observability 📊',
    livePreview: '',
    visitors: '100+ Hosts',
  },
  {
    priority: 6,
    title: 'Container & Self-Hosted Services',
    shortDescription:
      'Built and manage containerized infrastructure using Docker for services including Nextcloud on-premises file sharing, local OLLAMA AI models, and custom business applications.',
    cover:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2070&auto=format&fit=crop',
    type: 'Infrastructure 🐳',
    livePreview: '',
    siteAge: '1 year old',
  },
]

// Service Data - Replaced with IT Operations Skills
export const serviceData = [
  {
    icon: '🏗️',
    title: 'Infrastructure Management',
    shortDescription: 'Designing and managing enterprise infrastructure with Nutanix, VMware, and Windows Server.',
  },
  {
    icon: '☁️',
    title: 'Cloud Operations',
    shortDescription: 'Microsoft 365, Intune MDM, and Azure Active Directory enterprise deployments.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    shortDescription: 'CrowdStrike EDR, Palo Alto Firewall, Proofpoint email security implementation.',
  },
  {
    icon: '🤖',
    title: 'Automation & DevOps',
    shortDescription: 'Building automation workflows with n8n, Docker containerization, and CI/CD.',
  },
  {
    icon: '📊',
    title: 'Monitoring & Observability',
    shortDescription: 'Zabbix monitoring, OpenSearch log aggregation, and performance analysis.',
  },
  {
    icon: '🛠️',
    title: 'Systems Administration',
    shortDescription: 'Active Directory, SQL Server clustering, Veeam backup, and Linux server management.',
  },
  {
    icon: '🌐',
    title: 'Network Architecture',
    shortDescription: 'Cisco & Aruba Switches, Aruba Access Points, Mac Filtered Internet, and Designing Network Infrastructure.',
  },
  {
    icon: '⚡',
    title: 'SD-WAN',
    shortDescription: 'Site-Site Connectivity, MPLS, QOS based routing, BIO and WAN Optimization.',
  },
]

// Skill List - IT Operations Technologies
export const skillList = [
  {
    name: 'Nutanix HCI',
    icon: '🏗️',
  },
  {
    name: 'Microsoft 365',
    icon: '☁️',
  },
  {
    name: 'Intune MDM',
    icon: '📱',
  },
  {
    name: 'Windows Server',
    icon: '🪟',
  },
  {
    name: 'Linux Servers',
    icon: '🐧',
  },
  {
    name: 'CrowdStrike',
    icon: '🛡️',
  },
  {
    name: 'Palo Alto',
    icon: '🔥',
  },
  {
    name: 'Docker',
    icon: '🐳',
  },
  {
    name: 'Network Architecture',
    icon: '🌐',
  },
  {
    name: 'SD-WAN',
    icon: '⚡',
  },
]

// Footer Links - Removed Testimonials and Blogs
export const footerLinks = [
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
]

// Themes
export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

// Languages
export const languages = ['En', 'Ar']