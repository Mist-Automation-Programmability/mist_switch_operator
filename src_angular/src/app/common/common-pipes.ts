import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'startsWith' })
export class StartsWithPipe implements PipeTransform {
    transform(fullText: string, textMatch: string): boolean {
        return fullText.startsWith(textMatch);
    }
}

@Pipe({ name: 'mapToArray' })
export class MapToArrayPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let arr = [];
        for (let key in value) {
            arr.push({ key: key, value: value[key] });
        }
        return arr;
    }
}

@Pipe({ name: 'includes' })
export class IncludesPipe implements PipeTransform {
    transform(fullText: string, textMatch: string): boolean {
        return fullText.includes(textMatch);
    }
}

@Pipe({ name: "uptime"})
export class UptimePipe implements PipeTransform {
    transform(value: number) :string{
        let hours_left = value % 86400;
        let minutes_left = hours_left % 3600;
        let seconds_left = minutes_left % 60;

        const days = (value - hours_left) / 86400;
        const hours = (hours_left - minutes_left) / 3600;
        const minutes = (minutes_left - seconds_left) / 60;
        return days+"d, "+hours+"h, "+minutes+"m";
    }
}

@Pipe({name:'split'})
export class SplitPipe implements PipeTransform {
    transform(value: string, split_entry: string, entry:number) {
        return value.split(split_entry)[entry];
    }
}
