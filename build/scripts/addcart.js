let counter = $('.header__nav_right_counter');
let counter_img = $('.header__nav_right_counter_img');

let sum = 0;

function addCart() {
    sum += 1;

    counter.html(sum);

    if (sum > 9) {
        counter.html("9+");
        counter.addClass("fullcart");
    }

    counter.show();
    counter_img.show();

}