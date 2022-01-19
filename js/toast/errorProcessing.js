export function errorProcessing(response, message) {
    if (response.status >= 400) {
        const answer = response.json()
        new Toast({
            title: 'Ошибка',
            text: answer.valueText,
            theme: 'danger',
            autohide: true,
            interval: 3_000
        });
    } else if (response.status === 200) {
        new Toast({
            title: false,
            text: message,
            theme: 'success',
            autohide: true,
            interval: 3_000
        });
    } else {
        new Toast({
            title: 'Предупреждение',
            text: "Что-то пошло не так",
            theme: 'warning',
            autohide: true,
            interval: 3_000
        });
    }
}
