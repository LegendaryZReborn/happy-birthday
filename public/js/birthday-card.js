(function () {
    function _(id) {
        return document.getElementById(id);
    }



    _('showCardBtn').addEventListener('click', showCard)

    function hideOnClickOutsideCard(event) {
        $target = $(event.target);
        if (!$target.closest('#card-front').length && !$target.closest('#card-inside').length &&
            $('#card').is(":visible")) {
            hideCard();
        }
    }

    function showCard() {
        cardOverlay.classList.add("show");
        cardOverlay.classList.add("top");


        setTimeout(function(){
            document.addEventListener('click', hideOnClickOutsideCard); 
        },  1000)
    }

    function hideCard() {
        cardOverlay.classList.remove("show");
        document.removeEventListener('click', hideOnClickOutsideCard);

        setTimeout(function(){
            cardOverlay.classList.remove("top");
        },  1000)
    }

    var cardOverlay = _('card-overlay')
    var card = _('card'),
        openB = _('open'),
        closeB = _('close'),
        timer = null;

    openB.addEventListener('click', function () {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.setAttribute('class', 'open-fully');
            timer = null;
        }, 1000);
    });

    closeB.addEventListener('click', function () {
        card.setAttribute('class', 'close-half');
        if (timer) clearTimerout(timer);
        timer = setTimeout(function () {
            card.setAttribute('class', '');
            timer = null;
        }, 1000);
    });

}());



