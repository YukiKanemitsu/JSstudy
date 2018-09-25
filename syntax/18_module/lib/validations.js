const max_length = 140;
function validate_message(message) {
    return message.length <= max_length;
}
export {max_length, validate_message};

export default function validate_message2 (message) {
    // (省略)
}