export type ServiceSlug = "cwcm" | "fmwcm" | "pmwcm" | "sdcm" | "am" | "wa";

export type serviceItem = {
  slug: ServiceSlug;
  image: string;
  title: string;
  logo: string;
  approval_time: string;
  description: string;
};

export const services: serviceItem[] = [
  {
    slug: "cwcm",
    image: "/images/cwcm.jpg",
    title: "Comprehensive WCB Claims Management",
    logo: "/icons/cwcm-logo.svg",
    approval_time: "2-6 weeks",
    description:
      "End-to-end workplace injury claims management ensures compliance, efficiency, and cost reduction across all",
  },
  {
    slug: "fmwcm",
    image: "/images/fmwcm.jpg",
    title: "Full Medical WCB Claims Management",
    logo: "/icons/fmwcm-logo.svg",
    approval_time: "4-8 weeks",
    description:
      "Windley Ely’s most comprehensive program offers all the Comprehensive Claims Management program services, combined with a full complement of Windley Ely’s medical team to optimize return to work outcomes.",
  },
  {
    slug: "pmwcm",
    image: "/images/pmwcm.jpg",
    title: "Partial Medical WCB Claims Management",
    logo: "/icons/pmwcm-logo.svg",
    approval_time: "3-7 weeks",
    description:
      "By adding targeted medical management services to our Comprehensive Claims Management program, we can help you decrease claim durations, deliver a higher level of care for your employees, and increase your claims management ROI.",
  },
  {
    slug: "sdcm",
    image: "/images/sdcm.jpg",
    title: "Short-term Disability Claims Management",
    logo: "/icons/sdcm-logo.svg",
    approval_time: "1-3 weeks",
    description:
      "Effective administration of short-term disability/Medical Leave of Absence claims to support timely recovery and reduce workplace disruptions.",
  },
  {
    slug: "am",
    image: "/images/am.jpg",
    title: "Attendance Management",
    logo: "/icons/am-logo.svg",
    approval_time: "Ongoing",
    description:
      "Proactively track and manage employee attendance to minimize absenteeism and enhance workforce productivity.",
  },
  {
    slug: "wa",
    image: "/images/wa.jpg",
    title: "Workplace Accommodation",
    logo: "/icons/wa-logo.svg",
    approval_time: "2-4 weeks",
    description:
      "Tailored solutions to facilitate workplace accommodations, ensuring compliance and fostering an inclusive environment.",
  },
];
export default services;
