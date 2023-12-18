import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete'
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { OverlayModule } from 'primeng/overlay';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  exports: [
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    OverlayModule,
    PanelMenuModule,
    RippleModule,
    SlideMenuModule,
    SpeedDialModule,
    SplitButtonModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    TreeSelectModule,
    TreeTableModule,
    FileUploadModule,
    InputMaskModule,
    InputSwitchModule,
    SidebarModule,
    DialogModule,
    RadioButtonModule,
    PaginatorModule,
    ToastModule,
    TooltipModule,
    AccordionModule
  ]
})

export class PrimeNgModule { }