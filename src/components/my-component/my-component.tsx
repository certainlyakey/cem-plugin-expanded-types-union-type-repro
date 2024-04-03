import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { ImportedSize } from '../../types/size';

export type InternalSize = 's' | 'm' | 'l';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Size
   */
  @Prop() size: Exclude<ImportedSize, 'lg'>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
