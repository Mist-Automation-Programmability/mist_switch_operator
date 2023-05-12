import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

export interface ErrorData {
    message: string
}

@Component({
    selector: 'common-error',
    templateUrl: 'common-error.html',
})
export class ErrorDialog {

    constructor(
        public dialogRef: MatDialogRef<ErrorDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ErrorData
    ) { }
    ok(): void {
        this.dialogRef.close();
    }

}