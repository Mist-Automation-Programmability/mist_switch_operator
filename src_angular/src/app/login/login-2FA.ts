import { Component } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'login-2fa',
    templateUrl: 'login-2fa.html',
})
export class TwoFactorDialog {
    public twoFactor: string;
    constructor(public dialogRef: MatDialogRef<TwoFactorDialog>) { }

    close2FA() {
        this.dialogRef.close(this.twoFactor);
    }
    cancel2FA(): void {
        this.dialogRef.close();
    }
}