<script>
function reverseString(str) {
    return str.split("").reverse().join("");
    }
    const downloadLinks = document.querySelectorAll('.god');
    downloadLinks.forEach(link => {
    const linkToFile = link.getAttribute('href');
    const linkToFileEdited = reverseString(linkToFile)
link.setAttribute('href', `https://paidappstore.xyz/download?${linkToFileEdited}`);
});
</script>
