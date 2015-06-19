function StretchCell(inner, width, height) {
    this.inner = inner;
    var text = this.inner.text;
    if (text.length < height) {
        while (height - text.length > 0) {
            text = text.concat([""]);
            --height;
        }
    }
    this.inner.text = text.map(function (line) {
        if (line.length < width) {
            return line.concat(repeat(" ", width - line.length));
        } else {
            return line;
        }
    });
}
StretchCell.prototype.minHeight = function () {
    return this.inner.minHeight();
};
StretchCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
StretchCell.prototype.draw = function (w, h) {
    return this.inner.draw(w, h);
};

