document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <div class="top_bg">
    <div class="top_main">
        <a href="index.html" class="logo">
            <img src="uploads/img1/20220517/6283469c86903.png" class="logo_img" alt="深圳市天一智能科技有限公司">
        </a>
        <div class="nav_bg">
            <div class="minNav">
                <ul>
                    <li>
                        <a href="index.html"   >Home</a>
                    </li>
                    <li>
                        <a href="product.html" >Product Center</a>
                        <div class="Navdrop">
                            <p>
                            <a href='download.html'>FA Industrial Automation Parts</a><a href='zhizaiju.html'>Vehicles</a><a href='zidonghua.html'>Automation Equipment</a>                                </p>
                        </div>                        </li><li>
                        <a href="solution.html" >Technical Support</a>
                        <div class="Navdrop">
                            <p>
                            <a href='solution.html'>Industry Solutions</a><a href='fuwutixi.html'>Service System</a><a href='download.html'>Downloads</a>                                </p>
                        </div>                        </li><li>
                        <a href="about-us.html" class="dangqian">About Us</a>
                        <div class="Navdrop">
                            <p>
                            <a href='about-us.html'>Group Profile</a><a href='fazhanlicheng.html'>Development History</a><a href='jituanrongyu.html'>Group Honors</a><a href='chanyebuju.html'>Industrial Layout</a>                                </p>
                        </div>                        </li><li>
                        <a href="news.html" >News</a>
                                                </li><li>
                        <a href="contact.html" >Contact Us</a>
                                                </li><li>
                        <a href="xinxiangpian.html" >Image Film</a>
                                                </li> 
                </ul>
                <div class="clear_none"></div>
            </div>
        </div>
        <div class="clear_none"></div>
    </div>
</div>`;
  
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  });
  