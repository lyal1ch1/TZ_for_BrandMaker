const maxDigits = 10; // Максимальное количество цифр в поле
document.getElementById("phone").addEventListener("input", function () {
    if (this.value.length > maxDigits) {
        this.value = this.value.slice(0, maxDigits); // Удаляем лишние цифры
    }
});