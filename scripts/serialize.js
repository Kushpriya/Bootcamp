
export function serialize(data) {
    return data.map(datum => {
        let mappedResponse = {};
        mappedResponse["title"] = datum['title'];
        mappedResponse["body"] = datum['body'];
        mappedResponse["id"] = datum['id'];

        return mappedResponse;
    });
}
