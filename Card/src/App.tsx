import "./App.css";
import Card from "./components/Card";

import apple from './assets/apple.png';
import google from './assets/google.png';
import meta from './assets/meta.png';
import adobe from './assets/adobe.jpg';
import amazon from './assets/amazon.png';
import microsoft from './assets/microsoft.png';
import netflix from './assets/netflix.jpg';
import nvidia from './assets/nvidia.png';
import salesforce from './assets/salesforce.jpg';
import uber from './assets/uber.png';


function App() {

  interface JobOpening {
  brandLogo: string;
  companyName: string;
  datePosted: string;
  post: string;
  tag1: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  tag2: 'Junior-level' | 'Mid-level' | 'Senior-level' | 'Lead-level';
  payPerHour: number; // in dollars per hour
  location: string;
}

  const jobOpenings: JobOpening[] = [
  {
    brandLogo: apple,
    companyName: "Apple",
    datePosted: "2 days ago",
    post: "iOS Software Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    payPerHour: 95,
    location: "Cupertino, California"
  },
  {
    brandLogo: google,
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer (Angular)",
    tag1: "Full-time",
    tag2: "Mid-level",
    payPerHour: 80,
    location: "Mumbai, India"
  },
  {
    brandLogo: meta,
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Production Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    payPerHour: 110,
    location: "Menlo Park, California"
  },
  {
    brandLogo: amazon,
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Mid-level",
    payPerHour: 75,
    location: "Bengaluru, India"
  },
  {
    brandLogo: microsoft,
    companyName: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Azure Security Intern",
    tag1: "Internship",
    tag2: "Junior-level",
    payPerHour: 45,
    location: "Hyderabad, India"
  },
  {
    brandLogo: netflix,
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Senior Distributed Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    payPerHour: 135,
    location: "Los Gatos, California"
  },
  {
    brandLogo: nvidia,
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/Deep Learning Engineer",
    tag1: "Full-time",
    tag2: "Lead-level",
    payPerHour: 120,
    location: "Santa Clara, California"
  },
  {
    brandLogo: uber,
    companyName: "Uber",
    datePosted: "2 weeks ago",
    post: "Backend Engineer (Go/Java)",
    tag1: "Full-time",
    tag2: "Mid-level",
    payPerHour: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: adobe,
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior-level",
    payPerHour: 55,
    location: "San Jose, California"
  },
  {
    brandLogo: salesforce,
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Contract",
    tag2: "Senior-level",
    payPerHour: 90,
    location: "Bengaluru, India"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return <div key = {idx}>
          <Card img = {elem.brandLogo} name = {elem.companyName} day = {elem.datePosted} role = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} price = {elem.payPerHour} location = {elem.location}/>
        </div>
      })}
    </div>
  );
}

export default App;