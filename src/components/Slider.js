import React from 'react';

export default function Slider(){
    return(
        <div class="container-fluid mt-2">
            <div class="row">
            <div class="col-3">
                <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-bigbillion-list" data-toggle="list" href="#list-bigbillion" role="tab" aria-controls="bigbillion">Big Billion Day</a>
                <a class="list-group-item list-group-item-action" id="list-deals-list" data-toggle="list" href="#list-deals" role="tab" aria-controls="deals">Deals of The Day</a>
                <a class="list-group-item list-group-item-action" id="list-iphone-list" data-toggle="list" href="#list-iphone" role="tab" aria-controls="iphone">iPhone 11 Pro</a>
                <a class="list-group-item list-group-item-action" id="list-laptops-list" data-toggle="list" href="#list-laptops" role="tab" aria-controls="laptops">Laptops Upto 50% Off</a>
                <a class="list-group-item list-group-item-action" id="list-besttvs-list" data-toggle="list" href="#list-besttvs" role="tab" aria-controls="besttvs">Best Selling TVs</a>
                <a class="list-group-item list-group-item-action" id="list-fashion-list" data-toggle="list" href="#list-fashion" role="tab" aria-controls="fashion">Top Fashion Brands</a>
                <a class="list-group-item list-group-item-action" id="list-men-list" data-toggle="list" href="#list-men" role="tab" aria-controls="men">Top Fashion Brands</a>
                </div>
            </div>
            <div class="col-9">
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-bigbillion" role="tabpanel" aria-labelledby="list-bigbillion-list"><img src="https://i.ibb.co/J3pmx39/97b0342ec140572b.jpg" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-deals" role="tabpanel" aria-labelledby="list-deals-list"><img src="https://www.pinkvilla.com/files/styles/shopping-hero/public/outfit-valentines-1000-x-400.jpg?itok=QqvOg3CN" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-iphone" role="tabpanel" aria-labelledby="list-iphone-list"><img src="https://ae01.alicdn.com/kf/HTB1U_BuEr1YBuNjSszeq6yblFXa5.jpg" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-laptops" role="tabpanel" aria-labelledby="list-laptops-list"><img src="https://zenexworld.com/store/wp-content/uploads/2018/04/Ip110-1000x400.jpg" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-besttvs" role="tabpanel" aria-labelledby="list-besttvs-list"><img src="https://www.mindstellar.com/wp-content/uploads/2019/04/Master-1000x400.jpg" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-fashion" role="tabpanel" aria-labelledby="list-fashion-list"><img src="http://staticawsy.yepme.com/images/women_winterwear_30012018.jpg" class="w-100 img-fluid rounded"></img></div>
                <div class="tab-pane fade" id="list-men" role="tabpanel" aria-labelledby="list-men-list"><img src="http://craigryan.com/wp-content/uploads/custom_clothing.jpg" class="w-100 img-fluid rounded"></img></div>
                </div>
            </div>
            </div>
        </div>
    )
}