var Language;
(function (Language) {
    Language[Language["English"] = 50] = "English";
    Language[Language["Spanish"] = 60] = "Spanish";
    Language[Language["Russian"] = 90] = "Russian";
})(Language || (Language = {}));
console.log(Language.Russian);
