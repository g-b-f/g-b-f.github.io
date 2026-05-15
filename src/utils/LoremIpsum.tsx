import type { ReactElement } from "react"

export default class LoremIpsum{
    first_paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor arcu eu ex gravida, sit amet lobortis elit fringilla. Phasellus ornare vestibulum odio, eu pellentesque ex mollis in. Praesent gravida porttitor metus ut mattis. Quisque eleifend cursus eros, in posuere dolor pulvinar id. Aenean elementum magna eget imperdiet ornare. Duis efficitur nisl ipsum, a ultrices lacus suscipit nec. Morbi scelerisque sapien felis, luctus aliquet libero ornare vitae. Aenean vel erat id dolor placerat rutrum ut consequat est. Praesent ut lectus et mauris suscipit aliquet. Etiam eget iaculis felis. Curabitur non rutrum dolor. Nulla sem dui, rhoncus sit amet sodales in, laoreet non ante."
    second_paragraph = "Donec maximus justo nunc. Vivamus fermentum nibh eros, id vulputate ligula vehicula in. Quisque vel mauris posuere, dictum tortor ut, tristique leo. Suspendisse vitae ligula molestie, tincidunt mi ac, rhoncus elit. In sit amet venenatis magna. Duis nisi leo, pellentesque vitae suscipit vel, ultrices et eros. Nullam cursus eros ut magna dapibus commodo. Nulla facilisi."
    third_paragraph = "Donec rhoncus velit ac nibh scelerisque, in vulputate purus commodo. Quisque mauris leo, commodo id tincidunt in, ornare vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer fermentum malesuada risus, et maximus lacus ultricies et. Pellentesque sit amet dui porttitor, suscipit nisl at, gravida justo. Integer ut ex semper, pharetra diam vel, condimentum quam. In hac habitasse platea dictumst. Donec leo neque, varius at vestibulum sit amet, maximus in mi. Ut vitae odio a tellus tempor malesuada. Vivamus nec lacinia mi. Morbi viverra nulla magna, eget pulvinar ligula consequat ac."
    fourth_paragraph = "Aliquam et enim facilisis, sodales risus at, luctus nunc. Morbi metus ipsum, iaculis vitae nisi elementum, gravida ullamcorper mi. Morbi dignissim sollicitudin justo ac euismod. Proin condimentum viverra viverra. Suspendisse lorem nunc, dapibus ac fermentum at, condimentum quis purus. Ut et placerat dolor. Suspendisse sit amet velit sodales, hendrerit libero eu, blandit nulla. Praesent scelerisque libero ante. Phasellus maximus tempor elit. Duis sed odio in arcu ultricies viverra. Ut non pretium mauris. Aenean vitae mattis lorem."
    fifth_paragraph = "Ut mauris neque, ultrices at eleifend in, fermentum sit amet lorem. Duis eget nunc vitae libero ultricies pulvinar. Nullam ante enim, tincidunt vel nulla nec, consectetur tempor elit. Maecenas orci orci, interdum a justo non, consequat bibendum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a nulla nulla. Quisque efficitur et purus ac porta. Donec fringilla lacinia rutrum. Nulla convallis tempus neque."
    readonly ipsum_paragraphs = [
        this.first_paragraph,
        this.second_paragraph,
        this.third_paragraph,
        this.fourth_paragraph,
        this.fifth_paragraph
    ]
    readonly ipsum_text = this.ipsum_paragraphs.join(" ")

    letters(count: number): string{
        let ipsum_text = this.ipsum_text
        if (count > this.ipsum_text.length){
            console.log("Not enough letters in ipsum, repeating text to reach count")
            let repeated_text = this.ipsum_text
            while (repeated_text.length < count){
                ipsum_text += " " + this.ipsum_text
            }
        }
        return ipsum_text.slice(0, count)
    }

    words(count: number): string{
        const split_ipsum = this.ipsum_text.split(" ")
        if (count > split_ipsum.length){
            console.log("Not enough words in ipsum, repeating text to reach count")
            while (split_ipsum.length < count){
                split_ipsum.push(...this.ipsum_text.split(" "))
            }
        }
        return split_ipsum.slice(0, count).join(" ")
    }

    sentences(count: number): string{
        const sep = ". "
        const split_ipsum = this.ipsum_text.split(sep)
        if (split_ipsum.length < count){
            console.log("Not enough sentences in ipsum, repeating sentences to reach count")
            while (split_ipsum.length < count){
                split_ipsum.push(...this.ipsum_text.split(sep))
            }
        }
        return split_ipsum.slice(0, count).join(sep) + sep
    }

    paragraphs(count: number): ReactElement{
        const ipsum_paragraphs = this.ipsum_paragraphs
        if (this.ipsum_paragraphs.length < count){
            console.log("Not enough paragraphs in ipsum, repeating paragraphs to reach count")
            while (ipsum_paragraphs.length < count){
                ipsum_paragraphs.push(...this.ipsum_paragraphs)
            }
     }
        return <>
        {ipsum_paragraphs.slice(0, count).map((p, i) => <><p key={i}>{p}</p><br /></>)}
        </>
    }
}