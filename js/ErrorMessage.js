function getError(response){
    let error = response.json();
    if (error.length == null) {
        return "Всё OK";
    } else {
        return error.valueText.toString();
    }
}