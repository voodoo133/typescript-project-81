class Tag {

    private singleTags: string[] = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

    constructor(private name: string, private attributes?: Record<string, string>, private text?: string) { } 

    toString() {
        let getAttributesString = this.getAttributesString();
        if (getAttributesString.length > 0) getAttributesString = ' ' + getAttributesString;

        if (this.singleTags.includes(this.name)) {
            return `<${this.name}${getAttributesString}>`;
        }

        return `<${this.name}${getAttributesString}>${this.text ?? ''}</${this.name}>`;
    }

    private getAttributesString(): string {
        return (this.attributes) ? Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`).join(' ') : '';
    }
}

export default Tag;