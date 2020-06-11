<template>
    <span>{{display}}</span>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                itemNo: 0,
                item: '',
                direction: 'right',
                position: 0,
                display: '',
                wait: false,
            }
        },
        name: "windRewriter",
        props: ['text'],
        mounted() {
            this.items = this.text.split(',');
            console.log (this.items);
            this.item = this.items[this.itemNo].trim();
            this.tick();
        },
        methods: {
            tick() {

                if (this.direction === 'right') {
                    this.position++;
                }
                if (this.direction === 'left') {
                    this.position--;
                }
                if (this.position > this.item.length) {
                    this.wait = true;
                    this.direction = 'left';
                }
                if (this.position === 0) {
                    this.direction = "right";
                    this.wait = true;
                    this.itemNo++;
                    if (this.itemNo >= this.items.length) {
                        this.itemNo = 0;
                    }
                    this.item = this.items[this.itemNo].trim();
                }
                this.display = this.item.substring(0, this.position);
                if (this.wait) {
                    this.wait = false;
                    if (this.direction === "left") {
                        setTimeout(this.tick, 5500);
                    } else {
                        setTimeout(this.tick, 500);
                    }

                } else if (this.direction === 'right') {
                    setTimeout(this.tick, 100);
                } else {
                    setTimeout(this.tick, 50);
                }
            }

        }
    }
</script>

<style scoped>

</style>
