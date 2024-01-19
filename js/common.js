(function () {
    window.ttt = {};

    $.fn.exists = function () {
        return this.length !== 0;
    };

    $.fn.isFind = function($_findElement) {
        var $this = $(this);
        var $findElement = $this.find($_findElement);
        return $findElement.exists() ? $findElement : false;
    };

    var buildSelectors = function (selectors, source, characterToPrependWith) {
        $.each(source, function (propertyName, value) {
            selectors[propertyName] = characterToPrependWith + value;
        });
    };

    ttt.buildSelectors = function (classNames, ids) {
        var selectors = {};
        if (classNames) {
            buildSelectors(selectors, classNames, ".");
        }
        if (ids) {
            buildSelectors(selectors, ids, "#");
        }
        return selectors;
    };

    var ids = {};

    var classNames = {
        dNone: 'd-none',
        tttMainStartContainer: 'ttt-main-start-container',
        tttMainChooseGameContainer: 'ttt-main-choose-game-container',
        tttStartGameBtn: 'ttt-start-game-btn'
    };

    var selectors = ttt.buildSelectors(classNames, ids);


    $(document).on('click', selectors.tttStartGameBtn, function(){
        $(selectors.tttMainStartContainer).addClass(classNames.dNone);
        $(selectors.tttMainChooseGameContainer).removeClass(classNames.dNone);
    });
})();