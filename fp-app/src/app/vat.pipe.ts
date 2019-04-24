import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: any, vatPercentage = 23): any {
    return value + ` +${vatPercentage} VAT`;
  }

}
