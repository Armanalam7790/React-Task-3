import React from 'react'
import Card from './components/Card';

const App = () => {
  const users = [
  {
    fullname: "Arman Khan",
    title: "Frontend Developer",
    profile: "https://randomuser.me/api/portraits/men/11.jpg",
    coverimg: "https://picsum.photos/seed/usercover11/900/300",
    likesCount: 1450,
    postCount: 58,
    viewCount: 18600,
    followed: true
  },
  {
    fullname: "Ayesha Rahman",
    title: "UI/UX Designer",
    profile: "https://randomuser.me/api/portraits/women/12.jpg",
    coverimg: "https://picsum.photos/seed/usercover12/900/300",
    likesCount: 980,
    postCount: 41,
    viewCount: 12900,
    followed: false
  },
  {
    fullname: "Rahul Verma",
    title: "Full Stack Developer",
    profile: "https://randomuser.me/api/portraits/men/13.jpg",
    coverimg: "https://picsum.photos/seed/usercover13/900/300",
    likesCount: 2100,
    postCount: 76,
    viewCount: 26800,
    followed: true
  },
  {
    fullname: "Sneha Gupta",
    title: "Content Creator",
    profile: "https://randomuser.me/api/portraits/women/14.jpg",
    coverimg: "https://picsum.photos/seed/usercover14/900/300",
    likesCount: 1720,
    postCount: 94,
    viewCount: 31500,
    followed: false
  },
  {
    fullname: "Mohit Patel",
    title: "Digital Marketer",
    profile: "https://randomuser.me/api/portraits/men/15.jpg",
    coverimg: "https://picsum.photos/seed/usercover15/900/300",
    likesCount: 760,
    postCount: 36,
    viewCount: 10400,
    followed: true
  },
  {
    fullname: "Pooja Mehta",
    title: "Product Manager",
    profile: "https://randomuser.me/api/portraits/women/16.jpg",
    coverimg: "https://picsum.photos/seed/usercover16/900/300",
    likesCount: 1880,
    postCount: 62,
    viewCount: 22400,
    followed: false
  },
  {
    fullname: "Karan Malhotra",
    title: "Backend Developer",
    profile: "https://randomuser.me/api/portraits/men/17.jpg",
    coverimg: "https://picsum.photos/seed/usercover17/900/300",
    likesCount: 1190,
    postCount: 49,
    viewCount: 16200,
    followed: true
  },
  {
    fullname: "Anjali Roy",
    title: "Tech Blogger",
    profile: "https://randomuser.me/api/portraits/women/18.jpg",
    coverimg: "https://picsum.photos/seed/usercover18/900/300",
    likesCount: 2550,
    postCount: 118,
    viewCount: 40800,
    followed: true
  },
  {
    fullname: "Vikas Yadav",
    title: "Mobile App Developer",
    profile: "https://randomuser.me/api/portraits/men/19.jpg",
    coverimg: "https://picsum.photos/seed/usercover19/900/300",
    likesCount: 840,
    postCount: 31,
    viewCount: 9300,
    followed: false
  },
  {
    fullname: "Sara Khan",
    title: "Startup Founder",
    profile: "https://randomuser.me/api/portraits/women/20.jpg",
    coverimg: "https://picsum.photos/seed/usercover20/900/300",
    likesCount: 3300,
    postCount: 152,
    viewCount: 59200,
    followed: true
  }
];



  return (
    <div className='bg-black text-white  min-h-screen flex flex-wrap gap-6 justify-center pt-10'>
      {
        users.map((elem,index)=>{
          return  <Card      key={index}
          fullname={elem.fullname}
          title={elem.title}
          profile={elem.profile}
          coverimg={elem.coverimg}
          likesCount={elem.likesCount}
          postCount={elem.postCount}
          viewCount={elem.viewCount}
          followed={elem.followed}
  />
        })
      }
    </div>
  )
}

export default App