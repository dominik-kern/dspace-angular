import { Component } from '@angular/core';

import { FieldRenderingType, MetadataBoxFieldRendering } from '../metadata-box.decorator';
import { RenderingTypeValueModelComponent } from '../rendering-type-value.model';

/**
 * This component renders the text metadata fields
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[ds-text]',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
@MetadataBoxFieldRendering(FieldRenderingType.CURRENCY)
export class CurrencyComponent extends RenderingTypeValueModelComponent {

}
