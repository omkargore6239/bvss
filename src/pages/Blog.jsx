import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronLeft, Loader2, AlertCircle, Heart, Share2, Bookmark, Eye, MessageCircle, Star, TrendingUp, Filter, Grid, List } from 'lucide-react';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [isLiked, setIsLiked] = useState({});
  const [isBookmarked, setIsBookmarked] = useState({});
  const [blogs, setBlogs] = useState([]);

  // Categories - you can modify these based on your needs
  const categories = ["All", "Research", "Sustainability", "Medical", "International", "Innovation", "Arts", "Technology", "Campus Life"];

  // Fetch blogs from API
  const fetchBlogs = async () => {
  try {
    setLoading(true);
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();

    // Transform API data to match frontend structure
    const transformedBlogs = data.map(blog => ({
      id: blog.id,
      title: blog.title,
      content: blog.content,
      excerpt: blog.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      author: "Admin",
      date: new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: Math.ceil(blog.content.split(' ').length / 200) + " min read",
      category: extractCategoryFromContent(blog.content) || "General",
      views: Math.floor(Math.random() * 1000) + 100,
      likes: Math.floor(Math.random() * 50) + 10,
      comments: Math.floor(Math.random() * 20) + 5
    }));

    setBlogPosts(transformedBlogs);
    setBlogs(transformedBlogs);

    // Fetch images for each blog
    for (const blog of transformedBlogs) {
      await fetchBlogImages(blog.id);
    }

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  // Extract category from content (you can improve this logic)
  const extractCategoryFromContent = (content) => {
    const keywords = {
      'Research': ['research', 'study', 'laboratory', 'experiment'],
      'Technology': ['technology', 'AI', 'artificial intelligence', 'digital'],
      'Medical': ['medical', 'health', 'hospital', 'treatment'],
      'Arts': ['art', 'music', 'creative', 'performance'],
      'Innovation': ['innovation', 'startup', 'entrepreneur', 'incubator'],
      'Sustainability': ['environment', 'green', 'sustainable', 'ecology']
    };
    
    const lowerContent = content.toLowerCase();
    for (const [category, keywordList] of Object.entries(keywords)) {
      if (keywordList.some(keyword => lowerContent.includes(keyword))) {
        return category;
      }
    }
    return 'General';
  };
const fetchBlogImages = async (blogId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/images/blog/${blogId}`);
    if (response.ok) {
      const imageData = await response.json();
      if (imageData.length > 0) {
        const imageUrl = imageData[0].image_url; // Use the correct property name
        setImages((prev) => ({
          ...prev,
          [blogId]: imageUrl,
        }));
      }
    } else {
      console.error('Failed to fetch images');
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};
useEffect(() => {
  const fetchImagesForBlogs = async () => {
    const imagePromises = blogs.map(blog => fetchBlogImages(blog.id));
    await Promise.all(imagePromises);
  };

  if (blogs.length > 0) {
    fetchImagesForBlogs();
  }
}, [blogs]);


  useEffect(() => {
    fetchBlogs();
  }, []);


  useEffect(() => {
    if (selectedPost) {
      window.scrollTo(0, 0);
    }
  }, [selectedPost]);

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'popular':
          return b.views - a.views;
        case 'liked':
          return b.likes - a.likes;
        default: // newest
          return new Date(b.date) - new Date(a.date);
      }
    });

  // Handle like toggle
  const toggleLike = (postId) => {
    setIsLiked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Handle bookmark toggle
  const toggleBookmark = (postId) => {
    setIsBookmarked(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading amazing stories...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => {
              setError(null);
              fetchBlogs();
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Single post view
  if (selectedPost) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        {/* Navigation */}
        <div className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold group"
              >
                <ChevronLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </button>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleLike(selectedPost.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    isLiked[selectedPost.id] 
                      ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked[selectedPost.id] ? 'fill-current' : ''}`} />
                  <span className="font-medium">{selectedPost.likes + (isLiked[selectedPost.id] ? 1 : 0)}</span>
                </button>
                
                <button
                  onClick={() => toggleBookmark(selectedPost.id)}
                  className={`p-2 rounded-full transition-all ${
                    isBookmarked[selectedPost.id] 
                      ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`h-5 w-5 ${isBookmarked[selectedPost.id] ? 'fill-current' : ''}`} />
                </button>
                
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedPost.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {selectedPost.comments}
                    </div>
                  </div>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  {selectedPost.title}
                </h1>
                
                <div className="flex items-center text-gray-600 space-x-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{selectedPost.author}</div>
                      <div className="text-sm text-gray-500">Author</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedPost.readTime}
                  </div>
                </div>
              </div>
              
              {images[selectedPost.id] && (
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
                  <img
                    src={images[selectedPost.id]}
                    alt={selectedPost.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              {/* Engagement Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => toggleLike(selectedPost.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                        isLiked[selectedPost.id] 
                          ? 'bg-red-500 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${isLiked[selectedPost.id] ? 'fill-current' : ''}`} />
                      <span className="font-medium">
                        {isLiked[selectedPost.id] ? 'Liked' : 'Like'} ({selectedPost.likes + (isLiked[selectedPost.id] ? 1 : 0)})
                      </span>
                    </button>
                    
                    <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all transform hover:scale-105">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-medium">Comment ({selectedPost.comments})</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">Share:</span>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110 shadow-lg">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors transform hover:scale-110 shadow-lg">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                      <button className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors transform hover:scale-110 shadow-lg">
                        <Star className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Enhanced Header/Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-lg">
                <TrendingUp className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              University <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 text-blue-100 max-w-3xl mx-auto">
              Discover inspiring stories, groundbreaking research, and the vibrant community that makes our university extraordinary.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search for amazing stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-2xl text-gray-900 bg-white/95 backdrop-blur-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all text-lg"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold">{blogPosts.length}</div>
                <div className="text-sm">Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{categories.length - 1}</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Controls */}
      <div className="bg-white/80 backdrop-blur-lg shadow-lg border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="liked">Most Liked</option>
                </select>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Featured Post */}
      {selectedCategory === "All" && !searchTerm && filteredPosts.length > 0 && (
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center mb-12">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl mr-4 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Featured Story</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-2xl border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {filteredPosts[0].category}
                      </span>
                      <div className="flex items-center text-gray-500 space-x-3">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {filteredPosts[0].views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {filteredPosts[0].likes}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center text-gray-600 mb-8 space-x-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedPost(filteredPosts[0])}
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
                    >
                      Read Full Story
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    {images[filteredPosts[0].id] && (
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                          src={images[filteredPosts[0].id]}
                          alt={filteredPosts[0].title}
                          className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Blog Posts */}
<div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl mr-4 shadow-lg">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900">
          {selectedCategory === "All" ? "Latest Stories" : `${selectedCategory} Stories`}
        </h2>
      </div>

      {/* Simple Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {filteredPosts.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
              {images[blog.id] ? (
                <img
                  src={images[blog.id]}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <p className="text-gray-500">Loading image...</p>
              )}
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-white rounded-3xl shadow-2xl p-16 max-w-lg mx-auto">
            <Search className="h-20 w-20 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Stories Found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search or category filter.</p>
          </div>
        </div>
      ) : (
        <div className={`grid gap-8 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredPosts.slice(selectedCategory === "All" && !searchTerm ? 1 : 0).map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                {images[post.id] && (
                  <img
                    src={images[post.id]}
                    alt={post.title}
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(post.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      isLiked[post.id]
                        ? 'bg-red-500/90 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isLiked[post.id] ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(post.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      isBookmarked[post.id]
                        ? 'bg-yellow-500/90 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-yellow-50'
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked[post.id] ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <div className={`p-8 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-center' : ''}`}>
                <h3 className={`font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors group-hover:text-blue-600 ${
                  viewMode === 'list' ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>

                <p className={`text-gray-600 mb-6 leading-relaxed ${
                  viewMode === 'list' ? 'text-lg' : ''
                }`}>
                  {post.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes + (isLiked[post.id] ? 1 : 0)}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </div>
                </div>

                {/* Author and Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mr-2">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  </div>
</div>


      {/* Enhanced Newsletter Section */}
      <div className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg inline-block mb-8">
              <Star className="h-12 w-12 text-yellow-300" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">Stay in the Loop</h2>
            <p className="text-blue-100 text-xl mb-10 leading-relaxed">
              Join thousands of readers and get the latest university stories, research breakthroughs, and campus updates delivered straight to your inbox.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-lg placeholder-gray-500"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl text-lg">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                ✨ No spam, unsubscribe anytime. Join 10,000+ happy readers!
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 flex justify-center items-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Weekly</div>
                <div className="text-sm">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl inline-block mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
              <p className="text-gray-600 text-lg">
                Get in touch with us for any inquiries about our university, programs, or admissions.
              </p>
            </div>
            
            {/* Simple Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's your inquiry about?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-xl text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  University Blog
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Sharing stories that matter, research that inspires, and a community that thrives. Stay connected with our vibrant university life.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors">
                    <Star className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  {categories.slice(1, 5).map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => setSelectedCategory(category)}
                        className="hover:text-white transition-colors text-left"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 University Blog. All rights reserved. Made with ❤️ for our community.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;