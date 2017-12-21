"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const task_1 = require('../model/task');
let CardComponent = class CardComponent {
    constructor() {
        // these are just for expirementing
        this.joy = 24;
        this.pain = ['one', 2, 'three'];
    }
    statusToggle() {
        this.task.completed = !this.task.completed;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', task_1.Task)
], CardComponent.prototype, "task", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Function)
], CardComponent.prototype, "removeFn", void 0);
CardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-card',
        templateUrl: 'card.component.html',
        styleUrls: ['card.component.css']
    }), 
    __metadata('design:paramtypes', [])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map