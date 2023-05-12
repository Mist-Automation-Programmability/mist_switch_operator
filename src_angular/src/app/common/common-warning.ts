import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

export interface WarningData {
    text: string,
    vlan_check: [""],
    bigWarning: boolean
}

@Component({
    selector: 'common-warning',
    templateUrl: 'common-warning.html',
})
export class WarningDialog {

    constructor(
        public dialogRef: MatDialogRef<WarningDialog>,
        @Inject(MAT_DIALOG_DATA) public data: WarningData
    ) { }
    ok(): void {
        this.dialogRef.close(true);
    }
    cancel(): void {
        this.dialogRef.close();
    }

}