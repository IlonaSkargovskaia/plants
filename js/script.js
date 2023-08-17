const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('active');
});

//prices
let acc = document.querySelectorAll('.accordeon__btn');

acc.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('active');

        let panel = item.nextElementSibling;

        if (panel.classList.contains('open')) {
            panel.classList.remove('open');
        } else {
            panel.classList.add('open');
        }
    });
    
})

//after select-city and show info




// select-city
let city = {
    city : 'city: Canandaigua, NY',
    phone : 'phone: +1 585 393 0001',
    adress : 'Office address: 151 Charlotte Street'
};



const select = document.querySelector('.select'),
      location_btn = document.querySelector('.location__item'),
      options_list = document.querySelector('.option-list'),
      options = document.querySelectorAll('.option'),
      select_address = document.querySelector('.select_address'),
      adress1 = document.querySelector('.contacts__adress1'),
      adress2 = document.querySelector('.contacts__adress2'),
      adress3 = document.querySelector('.contacts__adress3'),
      adress4 = document.querySelector('.contacts__adress4');


    // show & hide
    select.addEventListener('click', () => {
        options_list.classList.toggle('active');
        location_btn.classList.toggle('open');
    });

    //select options
    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((option) => {option.classList.remove('selected')});

            select.querySelector('button').innerHTML = option.innerHTML;
            option.classList.add('selected');
    
            if (option.classList.contains('selected') && option.classList.contains('opt1')) {
                select_address.appendChild.innerHTML = adress1.classList.add('active');
                select_address.appendChild.innerHTML = adress2.classList.remove('active');
                select_address.appendChild.innerHTML = adress3.classList.remove('active');
                select_address.appendChild.innerHTML = adress4.classList.remove('active');
            } else if (option.classList.contains('selected') && option.classList.contains('opt2')) {
                select_address.appendChild.innerHTML = adress2.classList.add('active');
                select_address.appendChild.innerHTML = adress1.classList.remove('active');
                select_address.appendChild.innerHTML = adress3.classList.remove('active');
                select_address.appendChild.innerHTML = adress4.classList.remove('active');
            } else if (option.classList.contains('selected') && option.classList.contains('opt3')) {
                select_address.appendChild.innerHTML = adress3.classList.add('active');
                select_address.appendChild.innerHTML = adress1.classList.remove('active');
                select_address.appendChild.innerHTML = adress2.classList.remove('active');
                select_address.appendChild.innerHTML = adress4.classList.remove('active');
            } else if (option.classList.contains('selected') && option.classList.contains('opt4')) {
                select_address.appendChild.innerHTML = adress4.classList.add('active');
                select_address.appendChild.innerHTML = adress1.classList.remove('active');
                select_address.appendChild.innerHTML = adress2.classList.remove('active');
                select_address.appendChild.innerHTML = adress3.classList.remove('active');
            }

            options_list.classList.toggle('active');
            location_btn.classList.toggle('open');

        });

        
    });


    //service tabs

    const tabsBtn = document.querySelectorAll('.tabs__price'),
          tabsCards = document.querySelectorAll('.service__card');

    
    tabsBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.tab;
            
            tabsCards.forEach(item => {
                if (item.classList.contains(filter)) {
                    item.classList.remove('disactive'); // delete blur from current card
                } else {
                    item.classList.add('disactive'); // add blur on cards
                }
            });

            tabsBtn.forEach(item => {
                item.classList.remove('active'); 
            });

            item.classList.add('active'); 
            
        });

    });
        

          



          

    



console.log(` 1. Вёрстка соответствует макету. Ширина экрана 768px +24 \n 2. Вёрстка соответствует макету. Ширина экрана 380px +24 \n 3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n 4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 `);



