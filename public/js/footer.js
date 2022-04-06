const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
    </div>       
</div>
<p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat commodi accusamus explicabo error animi! Praesentium delectus odio pariatur quas quibusdam quisquam dolorum expedita, nulla, aperiam perferendis repudiandae reprehenderit incidunt quo aliquid. Et voluptates doloribus, quasi sequi nam accusamus, deleniti impedit dolores placeat tenetur nesciunt quam eaque aliquam. In nobis mollitia unde dolore et, facilis aliquid laborum! Quam nulla quia est, numquam dolore consequuntur, doloribus fugiat vitae laudantium tempore vel velit quibusdam nam, ducimus dicta earum et. Mollitia fugit dolore culpa accusantium, doloribus, autem a quidem eos neque non corrupti modi totam saepe voluptate, possimus fuga beatae rerum corporis officiis atque?</p>
    <p class="info">support emails - help@karuniaabadi.com, customersupport@karunia.com</p>
    <p class="info">telephone - 0822 2307 4720, 0813 4450 6709</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();