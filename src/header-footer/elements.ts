import { DomType, OpenXmlElement } from "../document/dom";

export class WmlHeader implements OpenXmlElement {
    type: DomType = DomType.Header;
    children?: OpenXmlElement[] = [];
    cssStyle?: Record<string, string> = {};
    className?: string;
    parent?: OpenXmlElement;
}

export class WmlFooter implements OpenXmlElement {
    type: DomType = DomType.Footer;
    children?: OpenXmlElement[] = [];
    cssStyle?: Record<string, string> = {};
    className?: string;
    parent?: OpenXmlElement;
}