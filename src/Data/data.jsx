import john_doe_imge from '../assets/john_doe.png'
import jane_smith_image from '../assets/jane_smith.png'
import amanda_kullen_image from '../assets/amanda_kullen.png'
import lash_ericsson_image from '../assets/lash_ericsson.png'
import daniel_karlsson_image from '../assets/daniel_karlsson.png'
import maja_andersson_image from '../assets/maja_andersson.png'
import alma_jakobsson_image from '../assets/alma_jakobsson.png'
import august_lindgren_image from '../assets/august_lindgren.png'

//All blogs
export const blogPosts = [
     // Men blog posts 
        {
        id: 1,
        name: "John Doe", //'name' property in each post object to the name of the corresponding author, when we display the blog posts, the author's name will be associated with each post.
        image: john_doe_imge,
        authorId: 1,     //'authorId' sorting by the authorId ensures that posts by the same author are grouped together, regardless of the name of the author.
        category: "men",  //'category' in each blog post object to indicating its category (e.g., "men", "women", "children", "general").
        title: "Navigating ADHD as an Adult Male: Tips for Success",
        description: "This post explores unique challenges faced by adult men with ADHD and offers practical tips and strategies for managing symptoms and thriving in various areas of life.",
        date: "24 Juni 2023"
        },
        {
        id: 2,
        name: "August Lindgren",
        image: august_lindgren_image,
        authorId: 8,
        category: "men",
        title: "ADHD and Relationships: How to Communicate Effectively",
        description: "Delve into the impact of ADHD on relationships and provide insights into improving communication, managing emotions, and fostering healthy connections with partners, family, and friends.",
        date: "20 July 2023"
        },
        {
        id: 3,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "men",
        title: "ADHD in the Workplace: Strategies for Career Success",
        description: "Explore the intersection of ADHD and professional life, offering advice on time management, organization, handling distractions, and advocating for accommodations in the workplace.",
        date: "24 July 2023"
        },
        {
        id: 4,
        name: "Lash Ericsson ",
        image: lash_ericsson_image,
        authorId: 4,
        category: "men",
        title: "Managing ADHD Symptoms Through Exercise and Nutrition",
        description: "Highlight the importance of physical health in managing ADHD symptoms, discussing the benefits of exercise, nutrition, and lifestyle changes for improving focus, mood, and overall well-being.",
        date: "30 July 2023"
        },
        {
        id: 5,
        name: "Daniel Karlsson",
        image: daniel_karlsson_image,
        authorId: 5,
        category: "men",
        title: "ADHD and Self-Care: Prioritizing Mental Health",
        description: "Discuss the importance of self-care for men with ADHD, offering practical self-care tips, mindfulness techniques, and strategies for reducing stress and enhancing self-esteem.",
        date: "4 Aug 2023"
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
        date: "14 Aug 2023"
        },
        {
        id: 7,
        name: "Daniel Karlsson",
        image: daniel_karlsson_image,
        authorId: 5,
        category: "women",
        title: "Parenting with ADHD: Navigating Motherhood",
        description: "Explore the unique challenges faced by mothers with ADHD, offering tips for managing household tasks, parenting effectively, and maintaining self-care amidst the demands of motherhood.",
        date: "20 Aug 2023"
        },
        {
        id: 8,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "women",
        title: "ADHD and Hormones: Understanding the Impact on Women's Health",
        description: "Delve into the intersection of ADHD and hormonal fluctuations, discussing how menstrual cycles, pregnancy, and menopause can affect ADHD symptoms and offering strategies for symptom management.",
        date: "24 Aug 2023"
        },
        {
        id: 9,
        name: "Amanda Kullen",
        image: amanda_kullen_image,
        authorId: 3,
        category: "women",
        title: "Emotional Regulation and ADHD: Coping Strategies for Women",
        description: "Examine the connection between ADHD and emotional dysregulation in women, providing insights into recognizing and managing intense emotions, impulsivity, and mood swings.",
        date: "4 Sep 2023"
        },
        {
        id: 10,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "women",
        title: "Building Healthy Relationships with ADHD: Tips for Women",
        description: "Explore the impact of ADHD on relationships and offer practical advice on communication, setting boundaries, and fostering intimacy in romantic, familial, and platonic relationships.",
        date: "14 Sep 2023"
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
        date: "4 Sep 2023"
        },
        {
        id: 12,
        name: "Daniel Karlsson",        
        image: daniel_karlsson_image,
        authorId: 5,
        category: "kids",
        title: "Creating a Positive Home Environment for Children with ADHD",
        description: "Explore how parents can create a supportive and structured home environment to help children with ADHD thrive, including tips for establishing routines, managing behavior, and fostering independence.",
        date: "14 sep 2023"
        },
        {
        id: 13,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "kids",
        title: "ADHD and School Success: Tips for Parents and Educators",
        description: "Discuss the challenges children with ADHD may face in school and offer strategies for collaborating with teachers, advocating for accommodations, and supporting academic and social-emotional growth.",
        date: "25 Sep 2023"
        },
        {
        id: 14,
        name: "Lash Ericsson",
        image: lash_ericsson_image,
        authorId: 4,
        category: "kids",
        title: "Helping Children with ADHD Build Self-Esteem and Confidence",
        description: "Explore the impact of ADHD on children's self-esteem and provide guidance on nurturing resilience, celebrating strengths, and cultivating a positive sense of self-worth in children with ADHD.",
        date: "4 Jan 2024"
        },
        {
        id: 15,
        name: "Maja Andersson",
        image: maja_andersson_image,
        authorId: 6,
        category: "kids",
        title: "ADHD-Friendly Activities for Children: Fun and Engaging Ideas",
        description: "Offer a collection of creative and stimulating activities tailored to children with ADHD, including sensory-friendly play, mindfulness exercises, and strategies for promoting focus and self-regulation.",
        date: "14 Jan 2024"
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
        date: "23 Jan 2024"
        },
        {
        id: 17,
        name: "Jane Smith",
        image: jane_smith_image,
        authorId: 2,
        category: "general",
        title: "ADHD and Mental Health: Navigating Co-Occurring Conditions",
        description: "Explore the relationship between ADHD and common co-occurring mental health conditions, such as anxiety and depression, and discuss integrated approaches to treatment and self-care.",
        date: "12 Feb 2024"
        },
        {
        id: 18,
        name: "August Lindgren",
        image: august_lindgren_image,
        authorId: 8,
        category: "general",
        title: "ADHD and Time Management: Strategies for Success",
        description: "Delve into effective time management techniques for individuals with ADHD, offering practical tips, tools, and apps for improving organization, prioritization, and productivity.",
        date: "16 Feb 2024"
        },
        {
        id: 19,
        name: "Alma Jakobsson",
        image: alma_jakobsson_image,
        authorId: 7,
        category: "general",
        title: "The Power of Mindfulness for ADHD: Cultivating Presence and Awareness",
        description: "Explore the benefits of mindfulness practices for managing ADHD symptoms, reducing stress, and enhancing self-awareness, with practical tips and guided exercises for incorporating mindfulness into daily life.",
        date: "4 March 2024"
        },
        {
        id: 20,
        name: "Maja Andersson",
        image: maja_andersson_image,
        authorId: 6,
        category: "general",
        title: "Thriving with ADHD: Stories of Resilience and Success",
        description: "Share inspiring stories and testimonials from individuals with ADHD who have overcome challenges, pursued their passions, and achieved personal and professional success, offering hope and encouragement to others on their ADHD journey.",
        date: "24 March 2024"
         },     

  ];
  

  