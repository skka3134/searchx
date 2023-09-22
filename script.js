document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const searchEngine = document.getElementById("searchEngine");
    const resultsDiv = document.getElementById("results");
  
    searchButton.addEventListener("click", function () {
      const query = searchInput.value;
      const selectedEngine = searchEngine.value;
      let searchUrl = "";
  
      if (selectedEngine === "google") {
        searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      } else if (selectedEngine === "bilibili") {
        searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(query)}`;
      }else if (selectedEngine === "zhihu") {
        searchUrl = `https://www.zhihu.com/search?q=${encodeURIComponent(query)}`;
      }else if (selectedEngine === "youtube") {
        searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      } else if (selectedEngine === "douyin") {
        searchUrl = ` https://www.douyin.com/search/${encodeURIComponent(query)}`;
      } else if (selectedEngine === "tiktok") {
        searchUrl =  `https://www.tiktok.com/search/user?q=${encodeURIComponent(query)}`;
      } else if (selectedEngine === "weibo") {
        searchUrl = `https://s.weibo.com/weibo/${encodeURIComponent(query)}`;
      } else if (selectedEngine === "twitter") {
        searchUrl =`https://twitter.com/search?q=${encodeURIComponent(query)}`;
      } else if (selectedEngine === "jingdong") {
        searchUrl = `https://search.jd.com/Search?keyword=${encodeURIComponent(query)}`;
      } else if (selectedEngine === "tieba") {
        searchUrl = `https://tieba.baidu.com/f?ie=utf-8&kw=${encodeURIComponent(query)}&fr=search`;
      } else if (selectedEngine === "xiaohongshu") {
        searchUrl = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(query)}&source=web_explore_feed`;
      } else if (selectedEngine === "taobao") {
        searchUrl = `https://s.taobao.com/search?q=${encodeURIComponent(query)}`;
      }
  
      if (searchUrl !== "") {
        window.open(searchUrl, "_blank");
      }
    });
  });
  
