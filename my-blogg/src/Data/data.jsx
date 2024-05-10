//In the data.jsx file, we don't need to define functions for filtering posts. 
//Instead, we can simply export the blogPosts array and then filter the posts as needed in the application code.

import john_doe_imge from '../src/assets/MP1.png'
import jane_smith_image from '../src/assets/GP1.png'
import amanda_kullen_image from '../src/assets/GP2.png'
import lash_ericsson_image from '../src/assets/MP3.png'
import daniel_karlsson_image from '../src/assets/MP2.png'
import maja_andersson_image from '../src/assets/GP5.png'
import alma_jakobsson_image from '../src/assets/GP4.png'
import august_lindgren_image from '../src/assets/MP5.png'

//All blogs
const blogPosts = [
     // Men blog posts 
        {
        id: 1,
        name: "John Doe", //'name' property in each post object to the name of the corresponding author, when we display the blog posts, the author's name will be associated with each post.
        image: john_doe_imge,
        authorId: 1,     //'authorId' sorting by the authorId ensures that posts by the same author are grouped together, regardless of the name of the author.
        category: "men",  //'category' in each blog post object to indicating its category (e.g., "men", "women", "children", "general").
        title: "Navigating ADHD as an Adult Male: Tips for Success",
        description: "This post explores unique challenges faced by adult men with ADHD and offers practical tips and strategies for managing symptoms and thriving in various areas of life.",
        },
        {
        id: 2,
        name: "August Lindgren",
        image: august_lindgren_image,
        authorId: 8,
        category: "men",
        title: "ADHD and Relationships: How to Communicate Effectively",
        description: "Delve into the impact of ADHD on relationships and provide insights into improving communication, managing emotions, and fostering healthy connections with partners, family, and friends.",
        },
        {
        id: 3,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "men",
        title: "ADHD in the Workplace: Strategies for Career Success",
        description: "Explore the intersection of ADHD and professional life, offering advice on time management, organization, handling distractions, and advocating for accommodations in the workplace.",
        },
        {
        id: 4,
        name: "Lash Ericsson ",
        image: lash_ericsson_image,
        authorId: 4,
        category: "men",
        title: "Managing ADHD Symptoms Through Exercise and Nutrition",
        description: "Highlight the importance of physical health in managing ADHD symptoms, discussing the benefits of exercise, nutrition, and lifestyle changes for improving focus, mood, and overall well-being.",
        },
        {
        id: 5,
        name: "Daniel Karlsson",
        image: daniel_karlsson_image,
        authorId: 5,
        category: "men",
        title: "ADHD and Self-Care: Prioritizing Mental Health",
        description: "Discuss the importance of self-care for men with ADHD, offering practical self-care tips, mindfulness techniques, and strategies for reducing stress and enhancing self-esteem.",
        },

     // Women blog posts 
        {
        id: 6,
        name: "John Doe",
        image: john_doe_imge,
        authorId: 1,
        category: "women",
        title: "Thriving with ADHD: Empowering Women to Succeed",
        description: "This post celebrates the strengths and resilience of women with ADHD while providing actionable advice on managing symptoms, balancing responsibilities, and achieving personal and professional goals.",
        },
        {
        id: 7,
        name: "Daniel Karlsson",
        image: daniel_karlsson_image,
        authorId: 5,
        category: "women",
        title: "Parenting with ADHD: Navigating Motherhood",
        description: "Explore the unique challenges faced by mothers with ADHD, offering tips for managing household tasks, parenting effectively, and maintaining self-care amidst the demands of motherhood.",
        },
        {
        id: 8,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "women",
        title: "ADHD and Hormones: Understanding the Impact on Women's Health",
        description: "Delve into the intersection of ADHD and hormonal fluctuations, discussing how menstrual cycles, pregnancy, and menopause can affect ADHD symptoms and offering strategies for symptom management.",
        },
        {
        id: 9,
        name: "Amanda Kullen",
        image: amanda_kullen_image,
        authorId: 3,
        category: "women",
        title: "Emotional Regulation and ADHD: Coping Strategies for Women",
        description: "Examine the connection between ADHD and emotional dysregulation in women, providing insights into recognizing and managing intense emotions, impulsivity, and mood swings.",
        },
        {
        id: 10,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "women",
        title: "Building Healthy Relationships with ADHD: Tips for Women",
        description: "Explore the impact of ADHD on relationships and offer practical advice on communication, setting boundaries, and fostering intimacy in romantic, familial, and platonic relationships.",
        },

    // kids blog posts 
        {
        id: 11,
        name: "Amanda Kullen",
        image: amanda_kullen_image,
        authorId: 3,
        category: "kids",
        title: "Understanding ADHD in Children: A Parent's Guide",
        description: "This post provides an overview of ADHD in children, including common symptoms, diagnosis, and treatment options, along with practical strategies for supporting children with ADHD at home and in school.",
        },
        {
        id: 12,
        name: "Daniel Karlsson",        
        image: daniel_karlsson_image,
        authorId: 5,
        category: "kids",
        title: "Creating a Positive Home Environment for Children with ADHD",
        description: "Explore how parents can create a supportive and structured home environment to help children with ADHD thrive, including tips for establishing routines, managing behavior, and fostering independence.",
        },
        {
        id: 13,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "kids",
        title: "ADHD and School Success: Tips for Parents and Educators",
        description: "Discuss the challenges children with ADHD may face in school and offer strategies for collaborating with teachers, advocating for accommodations, and supporting academic and social-emotional growth.",
        },
        {
        id: 14,
        name: "Lash Ericsson",
        image: lash_ericsson_image,
        authorId: 4,
        category: "kids",
        title: "Helping Children with ADHD Build Self-Esteem and Confidence",
        description: "Explore the impact of ADHD on children's self-esteem and provide guidance on nurturing resilience, celebrating strengths, and cultivating a positive sense of self-worth in children with ADHD.",
        },
        {
        id: 15,
        name: "Maja Andersson",
        image: maja_andersson_image,
        authorId: 6,
        category: "kids",
        title: "ADHD-Friendly Activities for Children: Fun and Engaging Ideas",
        description: "Offer a collection of creative and stimulating activities tailored to children with ADHD, including sensory-friendly play, mindfulness exercises, and strategies for promoting focus and self-regulation.",
        },

    // Generel blog posts 
        {
        id: 16,
        name: "Daniel Karlsson",
        image: daniel_karlsson_image,
        authorId: 5,
        category: "general",
        title: "Demystifying ADHD: Understanding the Basics",
        description: "This post serves as an introductory guide to ADHD, covering its symptoms, causes, diagnosis, and treatment options, with the aim of increasing awareness and reducing stigma surrounding the condition.",
        },
        {
        id: 17,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "general",
        title: "ADHD and Mental Health: Navigating Co-Occurring Conditions",
        description: "Explore the relationship between ADHD and common co-occurring mental health conditions, such as anxiety and depression, and discuss integrated approaches to treatment and self-care.",
        },
        {
        id: 18,
        name: "August Lindgren",
        image: august_lindgren_image,
        authorId: 8,
        category: "general",
        title: "ADHD and Time Management: Strategies for Success",
        description: "Delve into effective time management techniques for individuals with ADHD, offering practical tips, tools, and apps for improving organization, prioritization, and productivity.",
        },
        {
        id: 19,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "general",
        title: "The Power of Mindfulness for ADHD: Cultivating Presence and Awareness",
        description: "Explore the benefits of mindfulness practices for managing ADHD symptoms, reducing stress, and enhancing self-awareness, with practical tips and guided exercises for incorporating mindfulness into daily life.",
        },
        {
        id: 20,
        name: "Maja Andersson",
        image: maja_andersson_image,
        authorId: 6,
        category: "general",
        title: "Thriving with ADHD: Stories of Resilience and Success",
        description: "Share inspiring stories and testimonials from individuals with ADHD who have overcome challenges, pursued their passions, and achieved personal and professional success, offering hope and encouragement to others on their ADHD journey.",
        },     

  ];
  
  export { blogPosts };
  