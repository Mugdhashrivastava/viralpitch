$(document).ready(function () {
  const fallbackBlogData = [
    {
      title: "How to write attractive captions for Instagram posts and why is it important?",
      author: "John Doe",
      date: "Oct 25, 2024",
      category: "Health, Sports & Fitness",
      time: "10 min",
      image: "https://viralpitch.co/viral_assets/img/home/manage.webp"
    },
    {
      title: "How to write attractive captions for Instagram posts",
      author: "John Doe",
      date: "Oct 25, 2024",
      category: "Health, Sports & Fitness",
      time: "10 min",
      image: "https://viralpitch.co/viral_assets/img/home/Payment_Agreements_sec1.webp"
    },
    {
      title: "How to create engaging Instagram posts",
      author: "Jane Smith",
      date: "Oct 24, 2024",
      category: "Lifestyle",
      time: "12 min",
      image: "https://viralpitch.co/viral_assets/img/Fashion_Apparels/Fashion_Apparels_Sec2.png"
    },
    {
      title: "Tips for successful influencer campaigns",
      author: "Alex Brown",
      date: "Oct 23, 2024",
      category: "Marketing",
      time: "15 min",
      image: "https://viralpitch.co/viral_assets/img/Fashion_Apparels/Fashion.png"
    },
    {
      title: "The rise of micro-influencers in 2024",
      author: "Emily Davis",
      date: "Oct 22, 2024",
      category: "Technology",
      time: "8 min",
      image: "https://viralpitch.co/viral_assets/img/home/manage.webp"
    },
    {
      title: "How to boost engagement with video content",
      author: "Michael Wilson",
      date: "Oct 21, 2024",
      category: "Entertainment",
      time: "10 min",
      image: "https://viralpitch.co/viral_assets/img/home/Payment_Agreements_sec1.webp"
    },
    {
      title: "Strategies for brand collaborations",
      author: "Sarah Johnson",
      date: "Oct 20, 2024",
      category: "Fashion",
      time: "11 min",
      image: "https://viralpitch.co/viral_assets/img/Fashion_Apparels/Fashion_Apparels_Sec2.png"
    }
  ];


function renderBlogs(blogData) {
  $("#blogContainer").empty();
  const first = blogData[0];
  $("#blogContainer").append(`
    <div class="blog-card featured">
      <img src="${first.image}" alt="Blog Image" />
      <div class="content">
        <p class="title"><strong>${first.title}</strong></p>
        <p class="meta">${first.category} • by ${first.author} • ${first.date}</p>
        <p class="time">${first.time} read</p>
      </div>
    </div>
  `);
  const $scrollRow = $('<div class="blog-grid-row"></div>');
  blogData.slice(1).forEach(blog => {
    $scrollRow.append(`
      <div class="blog-card">
        <img src="${blog.image}" alt="Blog Image" />
        <div class="content">
          <p class="title"><strong>${blog.title}</strong></p>
          <p class="meta">${blog.category} • by ${blog.author} • ${blog.date}</p> <!-- Fixed author reference -->
          <p class="time">${blog.time} read</p>
        </div>
      </div>
    `);
  });
  $("#blogContainer").append($scrollRow);
}

  $("#blogContainer").html('<p>Loading...</p>');

  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://stage.viralpitch.co/frontendapis/frontendapis.php',
    type: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer QUJGU0dFWFRcU1NFWEVTQjAwNDU6RjY0MTRGQzAjNzY0NCQ0NTk5IUEzOUUjMkY4RDdFNjA0RTlBQkNCUA=='
    },
    data: JSON.stringify({ type: "blog_static" }),
    beforeSend: function () { console.log('API request started at', new Date().toLocaleString()); },
    success: function (response) {
      console.log('API response:', response);
      const blogData = response.data || response.blogs || [];
      if (Array.isArray(blogData) && blogData.length > 0) {
        renderBlogs(blogData);
      } else {
        renderBlogs(fallbackBlogData);
      }
    },
    error: function (xhr, status, error) {
      console.log('API error:', status, error);
      renderBlogs(fallbackBlogData);
    },
    complete: function () { console.log('API request completed at', new Date().toLocaleString()); }
  });
});