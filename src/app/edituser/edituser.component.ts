import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from './user';

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((params) => {
            this.userService.getUser(params.id).subscribe(
                (user) => {
                    this.user = user;
                    // dans 4 ans
                },
                (error) => {
                    console.error('user not found');
                });
            // dans 2 ans
        });
        // maintenant
    }

}
